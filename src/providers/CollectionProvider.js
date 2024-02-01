import { createContext, useContext, useState } from "react";

const collectionContext = createContext();
export const useCollectionContext = () => useContext(collectionContext);

const CollectionProvider = ({ children }) => {
  const [collections, setCollections] = useState({});
  return <collectionContext.Provider>{children}</collectionContext.Provider>;
};
export default CollectionProvider;
