import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Editor from "./Editor";

function App() {
  return (
    <div className="App">
      <Editor />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
