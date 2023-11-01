import { useState, createContext } from "react";

export const UserLoggedInContext = createContext({});

// defining the data to be passed down
const UserLoggedInProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // functions to change logged in/out status

  const logIn = (email, password) => {
    setUser({ email: "jokes@laughs.biz ", id: 2 });
  };

  const logOut = () => {
    setUser(null);
  };

  // const createNewUser = () => {};

  return (
    // passing down our relevant state and associated functions in an anonymous object that children can pull from as needed using useContext
    <UserLoggedInContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserLoggedInContext.Provider>
  );
};

export default UserLoggedInProvider;
