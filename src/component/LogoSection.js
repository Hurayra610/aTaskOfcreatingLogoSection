import React, { useContext } from "react";
import Headers from "./Headers";
import "./CSS/LogoSection.css";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import ExplicitIcon from "@material-ui/icons/Explicit";
import LeftBreast from "./image/01.jpg";
import RightBreast from "./image/02.jpg";
import LeftSleeve from "./image/04.jpg";
import RightSleeve from "./image/05.jpg";
import BigBack from "./image/07.jpg";
import BigFront from "./image/06.jpg";
import ApplicationMethod from "./ApplicationMethod";
import ChooseArtwork from "./ChooseArtwork";
import ApplicationType from "./ApplicationType";
import DragAndDrop from "./DragAndDrop";
import { DataContext } from "./DataContext";
import Basket from "./Basket";

function LogoSection() {
  const context = useContext(DataContext);
  console.log(context.color);
  return (
    <div className="container">
      <Headers />
      <div className="logoSection" id="section1">
        <h2 id="choosePosition">1. Choose Position(s)</h2>
        <div className="logoBox">
          <div className="pictureSection">
            <img src={LeftBreast} alt="img" />
            <div className="pictureInfo">
              <p className="boldText" id="lbText">
                Left Breast
              </p>
              <p>(applied to all)</p>
              <p className="appOption">Application Option</p>
              <div className="printAmbro">
                <p className="printIcon">
                  <ColorLensIcon /> Print
                </p>
                <p>
                  <ExplicitIcon /> Embroidery
                </p>
              </div>
              <input
                onClick={context.lbHandler}
                className="checkInput"
                id="logoPositionLB"
                type="checkbox"
              />
            </div>
          </div>
          <div className="pictureSection">
            <img src={RightBreast} alt="img" />
            <div className="pictureInfo">
              <p className="boldText" id="rbText">
                Right Breast
              </p>
              <p>(applied to all)</p>
              <p className="appOption">Application Option</p>
              <div className="printAmbro">
                <p className="printIcon">
                  <ColorLensIcon /> Print
                </p>
                <p>
                  <ExplicitIcon /> Embroidery
                </p>
              </div>
              <input
                onClick={context.rbHandler}
                className="checkInput"
                id="logoPositionRB"
                type="checkbox"
              />
            </div>
          </div>
          <div className="pictureSection">
            <img src={LeftSleeve} alt="img" />
            <div className="pictureInfo">
              <p className="boldText" id="lsText">
                Left Sleeve
              </p>
              <p>(applied to all)</p>
              <p className="appOption">Application Option</p>
              <div className="printAmbro">
                <p className="printIcon">
                  <ColorLensIcon /> Print
                </p>
                <p>
                  <ExplicitIcon /> Embroidery
                </p>
              </div>
              <input
                onClick={context.lsHandler}
                className="checkInput"
                id="logoPositionLS"
                type="checkbox"
              />
            </div>
          </div>
          <div className="pictureSection">
            <img src={RightSleeve} alt="img" />
            <div className="pictureInfo">
              <p className="boldText" id="rsText">
                Right Sleeve
              </p>
              <p>(applied to all)</p>
              <p className="appOption">Application Option</p>
              <div className="printAmbro">
                <p className="printIcon">
                  <ColorLensIcon /> Print
                </p>
                <p>
                  <ExplicitIcon /> Embroidery
                </p>
              </div>
              <input
                onClick={context.rsHandler}
                className="checkInput"
                id="logoPositionRS"
                type="checkbox"
              />
            </div>
          </div>
          <div className="pictureSection">
            <img src={BigBack} alt="img" />
            <div className="pictureInfo">
              <p className="boldText" id="bbText">
                Big Back
              </p>
              <p>(applied to all)</p>
              <p className="appOption">Application Option</p>
              <div className="printAmbro">
                <p className="printIcon">
                  <ColorLensIcon /> Print
                </p>
                <p>
                  <ExplicitIcon /> Embroidery
                </p>
              </div>
              <input
                onClick={context.bbHandler}
                className="checkInput"
                id="logoPositionBB"
                type="checkbox"
              />
            </div>
          </div>
          <div className="pictureSection">
            <img src={BigFront} alt="img" />
            <div className="pictureInfo">
              <p className="boldText" id="bfText">
                Big Front
              </p>
              <p>(applied to all)</p>
              <p className="appOption">Application Option</p>
              <div className="printAmbro">
                <p className="printIcon">
                  <ColorLensIcon /> Print
                </p>
                <p>
                  <ExplicitIcon /> Embroidery
                </p>
              </div>
              <input
                onClick={context.bfHandler}
                className="checkInput"
                id="logoPositionBF"
                type="checkbox"
              />
            </div>
          </div>
        </div>
        <hr />
        <ApplicationMethod />
        <hr />
        <ChooseArtwork />
        <hr />
        <ApplicationType />
        <hr />
        <DragAndDrop />
        <hr />
        <Basket />
      </div>
    </div>
  );
}

export default LogoSection;
