import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const useCollection = (path) => {
  console.log(path);
  const [currentCollection, setCurrentCollection] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const collectionRef = collection(db, path);
    getDocs(collectionRef).then(
      (querySnapshot) => {
        setCurrentCollection(
          querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      },
      (err) => {
        // ? should this be err.message - the error should be stadnardised by firebase and in firebase docs
        setError(err.message);
        console.error(err);
      }
    );
  }, [path]);
  return { currentCollection, error };
};
export default useCollection;
