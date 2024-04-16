import React from "react";
import "./Buttons.css";
const Buttons = ({onButtonClick}) => {
  const buttonsarr = [
    "c",
    "1 ",
    " 2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
  ];
  return (
    <div>
      <div className="btn_container">
        {buttonsarr.map((buttonname) => (
          <button className="button__style" onClick={()=>onButtonClick(buttonname)}>{buttonname}</button>
        ))}
      </div>
    </div>
  );
};

export default Buttons;
