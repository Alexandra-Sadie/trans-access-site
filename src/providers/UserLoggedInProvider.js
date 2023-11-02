import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState, createContext } from "react";
import { auth } from "../firebase";

export const UserLoggedInContext = createContext({});

// defining the data to be passed down
const UserLoggedInProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // functions to change logged in/out status

  const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { email, uid } = userCredential.user;
        setUser({ email, uid });
      })
      .catch((err) => console.error(err));
  };

  const logOut = () => {
    setUser(null);
  };

  const createNewUser = (signupEmail, signupPassword) => {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword).then(
      (userCredential) => {
        console.log(userCredential);
      }
    );
  };

  return (
    // passing down our relevant state and associated functions in an anonymous object that children can pull from as needed using useContext
    <UserLoggedInContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserLoggedInContext.Provider>
  );
};

export default UserLoggedInProvider;
