import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Usually we do our main work in some other file / component ,
// import that component and inject it in the root div tag
// present in the  index.html file.App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
