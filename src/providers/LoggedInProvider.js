import { useState, createContext } from "react";

export const LoggedInContext = createContext({});

// defining the data to be passed down
const LoggedInProvider = ({ children }) => {
  const [loggedInStatus, setLoggedInStatus] = useState(false);

  // functions to change logged in/out status

  const logIn = (event) => {
    event.preventDefault();
    setLoggedInStatus(true);
  };

  const logOut = (event) => {
    event.preventDefault();
    setLoggedInStatus(false);
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
