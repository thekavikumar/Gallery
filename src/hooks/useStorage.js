import React from "react";
import { useState, useEffect } from "react";
import { firestore, storage } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const useStorage = ({ file, user }) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(storage, file.name);
    const collectionRef = collection(firestore, user.displayName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "stage_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          const created = serverTimestamp();
          addDoc(collectionRef, { url, created });
          setUrl(url);
          return;
        });
      }
    );
  }, [file]);
  return { url, progress, error };
};

export default useStorage;
