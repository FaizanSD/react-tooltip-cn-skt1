// App.js
import React, { useState } from "react";
import "./App.css";
import Tooltip from "./components/Tooltip";

export default function App() {
  const [hover, setHover] = useState(false);

  return (
    <>
    <div className="background-image"></div>
    <div className="App">
      <h2 className="mainHeading">React  Tooltip</h2>
      <div
        className="hover-div"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <p className="hover-class">Hover over me</p>
        {hover && <Tooltip />}
      </div>
    </div>
    </>
  );
}
