import { useState, useEffect } from "react";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";

export const useFirestore = (names) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const results = await Promise.all(
          names.map(async (name) => {
            const snapshot = await getDocs(collection(db, name));
            const docs = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            return { [name]: docs };
          })
        );
        setData(Object.assign({}, ...results));
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, [names]);

  return { data, loading };
};
