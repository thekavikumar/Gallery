import React, { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import "./Image.css";
import { motion } from "framer-motion";

import { firestore } from "../firebase/config";
import { deleteDoc, doc } from "firebase/firestore";

function Image({ setSelectedImg, user }) {
  const { docs, setDocs } = useFirestore({ collections: user.displayName });
  function deleteImage(id) {
    setDocs((pre) => {
      return pre.filter((item, index) => {
        if (index == id) {
          const ref = doc(firestore, user.displayName, item.id);
          deleteDoc(ref).then(() => {
            console.log("Deleted!");
          });
          console.log("delete" + id);
        }
      });
    });
  }
  return (
    <div className="imageGrid">
      {docs &&
        docs.map((doc, index) => (
          <motion.div
            className="img-wrap"
            id={index}
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
          >
            <motion.img
              src={doc.url}
              onClick={() => setSelectedImg(doc.url)}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
            <button
              className="image-delete"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="fas fa-trash-alt trash"></i>
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Confirm deletion</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>Do you confirm to delete this image?</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                      onClick={() => {
                        deleteImage(index);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
    </div>
  );
}

export default Image;
