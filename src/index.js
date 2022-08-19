import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ThemeContextWrapper from "./ThemeContextWrapper.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextWrapper>
    <App />{" "}
  </ThemeContextWrapper>
);
