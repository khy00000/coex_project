import { useState, useEffect } from "react";
import { db } from "../firebase.js";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const useFirestore = (names) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);
        setError(null);

        const results = await Promise.all(
          names.map(async (name) => {
            // 컬렉션 별 정렬 조건 다르게 적용
            const q =
              name === "mainnewsData"
                ? query(collection(db, name), orderBy("tabid", "asc"))
                : query(collection(db, name), orderBy("id", "asc"));

            const snapshot = await getDocs(q);

            const docs = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));

            return { [name]: docs };
          })
        );

        setData(Object.assign({}, ...results));
      } catch (err) {
        console.error("Firestore 데이터 로드 실패:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, [names]);

  return { data, loading, error };
};

export default useFirestore;