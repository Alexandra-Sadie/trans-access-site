import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
import { useState, createContext, useEffect } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext({});

// defining the data to be passed down
const AuthProvider = ({ children }) => {
  const [localUser, setLocalUser] = useState(null);
  // this will actually have lang switch logic later on
  const currentLang = "en";

  // this useEffect runs on page mount, and checks if the auth status has changed -- aka using firebase auth to let us know when it flags a user as having signed in
  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(auth, (returnedUser) => {
      // firebase auth will give us a "user" object...
      // ...which, if we have it, we can set our local user state to be equal to
      if (returnedUser) {
        setLocalUser(returnedUser);
      }
      // if we don't get a user object from firebase auth for whatever reason, we set our user state to null so the browser shows them as locally logged out
      else {
        setLocalUser(null);
      }
    });

    // TODO: explain this better lol
    // returning this here ensures that it runs the function in "onAuthStateChanged" from firebase, which at its end unsubscribes from the firebase database
    // this is defensive -- because this useEffect is within our Provider, it technically never unmounts, but if this was done in a component that could unmount, then the  it means that we ensure that we are not continually listening to the firebase auth database even when the user is already logged in/we've navigated to a different component. this prevents possible memory leaks :)
    // see these docs:
    // https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#onauthstatechanged
    // https://react.dev/reference/react/useEffect (the part about cleanup logic)

    return unsubscribeFromAuth;
  }, []);

  // functions to change logged in/out status
  const logIn = (loginEmail, loginPassword, callback) => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      // TODO: decide if we really want to do anything here
      .then((userCredential) => {
        console.log(userCredential);
        // This callback is an optional argument that can be implemented lower down in the application to perform a desired callback function once the login promise successfully completes.
        if (callback) {
          callback();
        }
      })
      .catch((err) => console.error(err));
  };

  const logOut = () => {
    signOut(auth)
      // expected to return nothing when succesful
      .then(() => {
        console.log("Signed Out!");
      })
      .catch((err) => console.error(err));
  };

  const createNewUser = (signupEmail, signupPassword, callback) => {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      // TODO: decide if we really want to do anything here
      .then((userCredential) => {
        console.log(userCredential);
        // TODO: investigate if this can be tied to a global provider using auth.languageCode
        // we're doing this in order to send different language verification emails
        // eventually, if the user toggles the site language to french, currentLang will be updated to french -- currently hardcoded to "en"
        auth.languageCode = currentLang;
        sendEmailVerification(auth.currentUser);
        if (callback) {
          callback();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    // passing down our relevant state and associated functions in an anonymous object that children can pull from as needed using useContext
    <AuthContext.Provider value={{ localUser, logIn, logOut, createNewUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
