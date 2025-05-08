import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { db } from "../firebase";

// this creates the context
// ? try to figure out why this can be empty whereas we initialised elsewhere with an empty array
// ? then choose one patter and stick with it across files
const collectionContext = createContext();
// by exporting a custom hook that calls useContext for us, rather than just
// exporting the full context, we simplify calls in UI components
// ? should we rename this to something like PractitionerProvider
export const useCollectionContext = () => useContext(collectionContext);

// the broad purpose of this provider is to give the collection of practitioners relevant to a particular site page
// i.e. doctors, therapists, etc.
// we hold onto this data on first access to any practitioner
// listing page to avoid excess database calls - which cost $ at scale
const CollectionProvider = ({ children }) => {
  // we are holding the collectionsObj in state, so that during one session at our site
  // if a user requests the collection of a particular provider type a second time
  // they see the state-held data of the first time they clicked on that page - rather than doing a full db request again
  // this is known as memoisation in programming - saving resources on a section function call with same args
  // by simply saving the first result of that call rather than running everything again
  // in the current code below, a reload of the site will trigger a reset of this component and lose all state
  // TODO memoise this further to use time-limited localStorage to further restrain request volume
  const [collectionsObj, setCollectionsObj] = useState({});
  const [currentCollection, setCurrentCollection] = useState(null);
  const [error, setError] = useState(null);

  // getCollection is a function that takes a name of a firebase collection, as a string,
  // and returns that collection, if it exists
  const getCollection = (collectionString) => {
    // we check if we already have data matching this collection name held in state
    if (collectionsObj[collectionString]) {
      // if so we just set that as the currently visible collection
      setCurrentCollection(collectionsObj[collectionString]);
    } else {
      // otherwise we do a firebase call to access the collection
      getDocs(collection(db, collectionString)).then(
        // if the collection exists firebase returns a querySnapshot object
        (querySnapshot) => {
          // for each doc in querySnapshot.docs (in practice, a practitioner) return an object containing
          const collectionArray = querySnapshot.docs.map((doc) => ({
            // that practitioner's data - calling doc.data() is a firebase practice to access data
            ...doc.data(),
            // and also add the unique document id
            id: doc.id,
          }));
          console.log("db request: ", collectionArray.length, " items");
          // this is the memoisation step - remember we are only calling getDocs if there
          // is no collection matching this key in the collectionObj
          // so we add THIS collection at this key, so that future calls will simply grab that already accessed data
          setCollectionsObj((currentCollectionsObj) => ({
            ...currentCollectionsObj,
            [collectionString]: collectionArray,
          }));
          // we also need to actually set the CURRENT collection so that the user sees the new data - the collectionsObj just holds
          // onto it for FUTURE calls
          setCurrentCollection(collectionArray);
        },
        // if there is an error - probably collection does not exist, or maybe some connection error or other firebase error
        // we handle it here - currently just logging it
        // TODO handle errors better maybe by displaying some UI message to the user
        (err) => {
          // ? should this be err.message - the error should be standardised by firebase and in firebase docs
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
