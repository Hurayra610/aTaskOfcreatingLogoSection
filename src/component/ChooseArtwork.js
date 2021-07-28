import React from "react";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import "./CSS/ChooseArtwork.css";

function ChooseArtwork() {
  return (
    <div className="chooseArtwork" id="section3">
      <h2>3. Choose Artwork</h2>
      <div className="artWork">
        <p>
          <strong>Add your</strong> logo/text
        </p>
        <div className="artworkArea">
          <input className="input" type="radio" />
          <div className="artworkAreaInfo">
            <FiberNewIcon />
            <p className="infoHead">Add New Customisation</p>
            <p>
              <i>+ $8.95 One-Time Logo Setup Fee</i>
            </p>
          </div>
        </div>
      </div>
      <div className="appBtn">
        <a href="/product/addlogo#section2">
          <button className="appBackBtn">Back a Step</button>
        </a>
        <a href="/product/addlogo#section4">
          <button className="appContinueBtn">Continue</button>
        </a>
      </div>
    </div>
  );
}

export default ChooseArtwork;
