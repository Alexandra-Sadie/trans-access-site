import { useState, createContext } from "react";

export const NameChangeContext = createContext({});

const NameChangeProvider = ({ children }) => {
  const [ofAgeBoolean, setOfAgeBoolean] = useState(true);

  return (
    <NameChangeContext.Provider value={{ ofAgeBoolean, setOfAgeBoolean }}>
      {children}
    </NameChangeContext.Provider>
  );
};
export default NameChangeProvider;
