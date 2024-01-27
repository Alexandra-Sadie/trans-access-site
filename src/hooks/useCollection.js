import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";

const useCollection = (path) => {
  console.log(path);
  const [currentCollection, setCurrentCollection] = useState([]);
  const collectionRef = collection(db, path);
  getDocs(collectionRef).then(
    (documentsSnapshot) => {
      //   console.log(documentsSnapshot.data());

      const practitioners = documentsSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      //   setCurrentCollection(
      //     documentsSnapshot.map((doc) => ({ ...doc.data(), id: doc.id }))
      //   );
      setCurrentCollection(practitioners);
    },
    (err) => console.error(err)
  );
  return currentCollection;
};
export default useCollection;
