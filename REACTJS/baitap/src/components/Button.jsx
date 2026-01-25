import React from "react";
import "./Button.css";

const Button = ({ type, children, onClick }) => {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
3;
