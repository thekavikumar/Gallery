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

  const [imgId, setImgId] = useState(0);


  return (
    <div className="imageGrid">
      {docs &&
        docs.map((doc, index) => (
          <div key={doc.id}>
          <div className="card">
              <div className="card-header">
              <button
              className="image-delete"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={()=>{setImgId(index)}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
            </button>
              </div>
              <div className="card-body">
          <motion.div
            className="img-wrap"
            id={index}
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
                        deleteImage(imgId);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
          </div>
          </div>
        ))}
    </div>
  );
}

export default Image;
