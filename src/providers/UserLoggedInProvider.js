import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState, createContext, useEffect } from "react";
import { auth } from "../firebase";

export const UserLoggedInContext = createContext({});

// defining the data to be passed down
const UserLoggedInProvider = ({ children }) => {
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

  const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
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

  const createNewUser = (signupEmail, signupPassword) => {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      // TODO: decide if we really want to do anything here
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => console.error(err));
  };

  return (
    // passing down our relevant state and associated functions in an anonymous object that children can pull from as needed using useContext
    <UserLoggedInContext.Provider
      value={{ user, logIn, logOut, createNewUser }}
    >
      {children}
    </UserLoggedInContext.Provider>
  );
};

export default UserLoggedInProvider;
