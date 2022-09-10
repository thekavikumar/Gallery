import {
  collection,
  doc,
  orderBy,
  onSnapshot,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../firebase/config";

function useFirestore({ collections }) {
  const [docs, setDocs] = useState([]);
  const colRef = collection(firestore, collections);
  const q = query(colRef, orderBy("created", "desc"));
  useEffect(() => {
    const unsub = onSnapshot(q, (snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsub();
  }, [collections]);

  return { docs, setDocs };
}

export default useFirestore;
