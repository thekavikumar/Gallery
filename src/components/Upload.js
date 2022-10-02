import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./Upload.css";

function Upload () {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const changeHandler = (event) => {
    const types = ["image/png", "image/jpeg", "image/jpg"];
    let selected = event.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <div className="upload">
      <form>
        <label htmlFor="fileInput">
          <input id="fileInput" type="file" onChange={changeHandler} />
          <span>+</span>
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
