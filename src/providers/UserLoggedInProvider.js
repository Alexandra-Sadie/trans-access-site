import { useState, createContext } from "react";

export const UserLoggedInContext = createContext({});

// defining the data to be passed down
const UserLoggedInProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // functions to change logged in/out status

  const logIn = (event) => {
    event.preventDefault();
    setIsUserLoggedIn(true);
  };

  const logOut = (event) => {
    event.preventDefault();
    setIsUserLoggedIn(false);
  };

  //storing logged in status in an object to be passed to value below
  const currentLoginContext = {
    isUserLoggedIn,
    logIn,
    logOut,
  };

  return (
    <UserLoggedInContext.Provider value={currentLoginContext}>
      {children}
    </UserLoggedInContext.Provider>
  );
};

export default UserLoggedInProvider;
