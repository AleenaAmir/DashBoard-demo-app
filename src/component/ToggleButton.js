import React from "react";
import "./togglebutton.css";

const Switch = (props) => {
  return (
    <div>
      <div
        className={`switch ${props.checked ? "checked" : ""}`}
        style={{ padding: "5%" }}
        onClick={props.handleToggle}
      >
        Months
        <div className="slider">Years</div>
      </div>
    </div>
  );
};

export default Switch;
