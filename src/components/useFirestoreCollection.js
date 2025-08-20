import { useState, useEffect } from "react";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";

export const useFirestoreCollection = (collectionName, filterFn = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        let docs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (filterFn) {
          docs = docs.filter(filterFn);
        }

        setData(docs);
      } catch (err) {
        console.error(`${collectionName} 불러오기 실패:`, err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [collectionName, filterFn]);

  return { data, loading };
};
