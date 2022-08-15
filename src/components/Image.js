import React from "react";
import useFirestore from "../hooks/useFirestore";
import "./Image.css";
import { motion } from "framer-motion";

function Image({ setSelectedImg, user }) {
  const { docs } = useFirestore({ collections: user.displayName });
  return (
    <div className="imageGrid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
}

export default Image;
