import { createContext, useContext } from "react";

const collectionContext = createContext();
export const useCollectionContext = () => useContext(collectionContext);

const collectionProvider = ({ children }) => {
  return <collectionContext.Provider>{children}</collectionContext.Provider>;
};
export default collectionProvider;
