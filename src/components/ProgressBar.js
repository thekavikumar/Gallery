import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import "./Upload.css";
import { motion } from "framer-motion";
import { useUser } from '../hooks/useUser';

function ProgressBar ({ file, setFile }) {
  const { user } = useUser();
  const { progress, url } = useStorage({ file: file, user: user });
  console.log(progress, url);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <motion.div
      className="progressBar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
}

export default ProgressBar;
