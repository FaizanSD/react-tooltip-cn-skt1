
import React from "react";
import "../App.css";

const Tooltip = () => {
  return (
    <div className="tooltip-container">
      <div className="tooltip-triangle"></div>
      <div className="tooltip-content">
        <p>Thanks for hovering! I'm a tooltip</p>
      </div>
    </div>
  );
};

export default Tooltip;
