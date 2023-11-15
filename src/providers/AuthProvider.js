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

  const logIn = (loginEmail, loginPassword) => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      // TODO: decide if we really want to do anything here
      .then((userCredential) => {
        console.log(userCredential);
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

  const createNewUserEnglish = (signupEmail, signupPassword) => {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      // TODO: decide if we really want to do anything here
      .then((userCredential) => {
        console.log(userCredential);
        auth.languageCode = "en";
        sendEmailVerification(auth.currentUser);
      })
      .catch((err) => console.error(err));
  };

  return (
    // passing down our relevant state and associated functions in an anonymous object that children can pull from as needed using useContext
    <AuthContext.Provider value={{ user, logIn, logOut, createNewUserEnglish }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
