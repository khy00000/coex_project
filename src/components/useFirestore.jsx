import { useState, useEffect, useMemo } from "react";
import { db } from "../firebase.js";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const useFirestore = (names) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // names 배열이 변경되어도 무한 루프 방지 : 의존성 배열 최적화
  const memoizedNames = useMemo(() => names, [names.join(",")]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);
        setError(null);

        const results = await Promise.all(
          memoizedNames.map(async (name) => {
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
  }, [memoizedNames]);

  return { data, loading, error };
};

export default useFirestore;