import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { db } from "../firebase";

const collectionContext = createContext();
export const useCollectionContext = () => useContext(collectionContext);

const CollectionProvider = ({ children }) => {
  const [collectionsObj, setCollectionsObj] = useState({});
  const [currentCollection, setCurrentCollection] = useState(null);
  const [error, setError] = useState(null);

  const getCollection = (collectionString) => {
    if (collectionsObj[collectionString]) {
      setCurrentCollection(collectionsObj[collectionString]);
    } else {
      getDocs(collection(db, collectionString)).then(
        (querySnapshot) => {
          const collectionArray = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setCollectionsObj((currentCollectionsObj) => ({
            ...currentCollectionsObj,
            [collectionString]: collectionArray,
          }));
          setCurrentCollection(collectionArray);
        },
        (err) => {
          // ? should this be err.message - the error should be stadnardised by firebase and in firebase docs
          setError(err.message);
          console.error(err);
        }
      );
    }
  };

  return (
    <collectionContext.Provider
      value={{ getCollection, currentCollection, error }}
    >
      {children}
    </collectionContext.Provider>
  );
};
export default CollectionProvider;
