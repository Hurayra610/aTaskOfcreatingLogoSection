import React, { useContext } from "react";
import PublicIcon from "@material-ui/icons/Public";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import "./CSS/ApplicationType.css";
import { DataContext } from "./DataContext";

function ApplicationType() {
  const appTypeContext = useContext(DataContext);
  return (
    <div className="applicationType" id="section4">
      <h2>4. Choose Application Type</h2>
      <div className="type">
        <div
          className="typeLogo"
          onClick={appTypeContext.setApplicationTypeLogo}
        >
          <input
            onClick={appTypeContext.setApplicationTypeLogo}
            className="input"
            type="radio"
            name="radio"
          />
          <PublicIcon />
          <div className="logoInfo">
            <p className="infoHead">Logo</p>
          </div>
        </div>
        <div
          className="typeText"
          onClick={appTypeContext.setApplicationTypeText}
        >
          <input
            className="input"
            type="radio"
            name="radio"
            onClick={appTypeContext.setApplicationTypeText}
          />
          <TextFieldsIcon />
          <div className="textInfo">
            <p className="infoHead">Text</p>
          </div>
        </div>
      </div>
      <div className="appBtn">
        <a href="/product/addlogo#section3">
          <button className="appBackBtn">Back a Step</button>
        </a>
        <a href="/product/addlogo#section5">
          <button className="appContinueBtn">Continue</button>
        </a>
      </div>
    </div>
  );
}

export default ApplicationType;
