import { useState, createContext } from "react";

export const LoggedInContext = createContext({});

// defining the data to be passed down
const LoggedInProvider = ({ children }) => {
  const [loggedInStatus, setLoggedInStatus] = useState({
    loggedIn: false,
  });

  // functions to change logged in/out status

  const logIn = () => {
    setLoggedInStatus({ loggedIn: true });
  };

  const logOut = () => {
    setLoggedInStatus({ loggedIn: false });
  };

  //storing logged in status in an object to be passed to value below
  const currentLoginContext = {
    loggedInStatus,
    logIn,
    logOut,
  };

  return (
    <LoggedInContext.Provider value={currentLoginContext}>
      {children}
    </LoggedInContext.Provider>
  );
};

export default LoggedInProvider;
