import React, { useContext } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { DataContext } from "./DataContext";

function SelectColor() {
  const colorContext = useContext(DataContext);
  return (
    <div className="colorSelection">
      <div className="colorSectionHeader">
        <h2>1. Select Colour</h2>
        <span>6 Colours Available</span>
      </div>
      <div className="colorBtn">
        <button
          key="1"
          onClick={colorContext.blackBtnHandler}
          className="btn"
          id="black"
        >
          <CheckCircleIcon id="blackBtn" />
        </button>
        <button
          key="2"
          onClick={colorContext.redBtnHandler}
          className="btn"
          id="red"
        >
          <CheckCircleIcon id="redBtn" />
        </button>
        <button
          key="3"
          onClick={colorContext.greenBtnHandler}
          className="btn"
          id="green"
        >
          <CheckCircleIcon id="greenBtn" />
        </button>
        <button
          key="4"
          onClick={colorContext.blueBtnHandler}
          className="btn"
          id="blue"
        >
          <CheckCircleIcon id="blueBtn" />
        </button>
        <button
          key="5"
          onClick={colorContext.orangeBtnHandler}
          className="btn"
          id="orange"
        >
          <CheckCircleIcon id="orangeBtn" />
        </button>
        <button
          key="6"
          onClick={colorContext.yellowBtnHandler}
          className="btn"
          id="yellow"
        >
          <CheckCircleIcon id="yellowBtn" />
        </button>
      </div>
      <p id="nameColor">{colorContext.color}</p>
    </div>
  );
}
export default SelectColor;
