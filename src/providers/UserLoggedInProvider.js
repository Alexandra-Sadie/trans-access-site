import { useState, createContext } from "react";

export const UserLoggedInContext = createContext({});

// defining the data to be passed down
const UserLoggedInProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // functions to change logged in/out status

  const logIn = (event) => {
    setIsUserLoggedIn(true);
  };

  const logOut = (event) => {
    setIsUserLoggedIn(false);
  };

  return (
    // passing down our relevant state and associated functions in an anonymous object that children can pull from as needed using useContext
    <UserLoggedInContext.Provider value={{ isUserLoggedIn, logIn, logOut }}>
      {children}
    </UserLoggedInContext.Provider>
  );
};

export default UserLoggedInProvider;
