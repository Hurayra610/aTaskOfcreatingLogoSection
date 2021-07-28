import React, { useContext } from "react";
import "./CSS/ApplicationMethod.css";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import ExplicitIcon from "@material-ui/icons/Explicit";
import { DataContext } from "./DataContext";
import MethodError from "./MethodError";

function ApplicationMethod() {
  const methodName = useContext(DataContext);
  return (
    <div className="ApplicationMethod" id="section2">
      <h2 id="applicationMethod">2. Choose Application Method</h2>
      <div className="embroPaint">
        <div id="mthodErr">
          <MethodError />
        </div>
        <div className="embroidery" onClick={methodName.embroSelectionHandler}>
          <input
            className="input"
            type="radio"
            name="radio"
            onClick={methodName.embroSelectionHandler}
          />
          <ExplicitIcon />
          <div className="embroideryInfo">
            <p className="infoHead">Embroidery (Stitching)</p>
            <p>
              <i>Detailed and durable ideal for uniforms.</i>
            </p>
          </div>
        </div>
        <div className="paint" onClick={methodName.paintSelectionHandler}>
          <input
            className="input"
            type="radio"
            name="radio"
            onClick={methodName.paintSelectionHandler}
          />
          <ColorLensIcon />
          <div className="paintInfo">
            <p className="infoHead">Paint</p>
            <p>
              <i>Vivad and flexible for general use.</i>
            </p>
          </div>
        </div>
      </div>
      <div className="appBtn">
        <a href="/product/addlogo#section1">
          <button className="appBackBtn">Back a Step</button>
        </a>
        <a href="/product/addlogo#section3">
          <button className="appContinueBtn">Continue</button>
        </a>
      </div>
    </div>
  );
}

export default ApplicationMethod;
