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
  const [user, setUser] = useState(null);
  // this will actually have lang switch logic later on
  const currentLang = "en";

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // TODO: explain this
    return listen;
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
    <AuthContext.Provider value={{ user, logIn, logOut, createNewUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
