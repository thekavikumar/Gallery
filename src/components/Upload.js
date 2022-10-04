import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./Upload.css";
import { useTheme } from "../hooks/useTheme";

function Upload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const { isDarkMode } = useTheme();

  const changeHandler = (event) => {
    let selected = event.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  const handleOndragOver = (event) => {
    event.preventDefault();
  };

  const handleOndrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let selected = event.dataTransfer.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please drop an image file (png or jpg)");
    }
  };

  return (
    <div className="upload">
      <form onDrop={handleOndrop} onDragOver={handleOndragOver}>
        <label className={isDarkMode ? "dark" : "light"} htmlFor="fileInput">
          <input id="fileInput" type="file" onChange={changeHandler} />
          <span
            style={{
              color: isDarkMode ? "black" : "white",
            }}
          >
            Click Or Drag Image Here
          </span>
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </div>
  );
}

export default Upload;
