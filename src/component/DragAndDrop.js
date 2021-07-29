import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./CSS/DragAndDrop.css";
import { DataContext } from "./DataContext";

function DragAndDrop() {
  const dragDropContext = useContext(DataContext);
  return (
    <div className="dragAndDrop" id="section5">
      <h2>5. Configure Your Logo</h2>
      <div className="logoConfigure">
        <div className="logoUpload">
          <div className="logoUploadTitle">
            <input type="radio" name="radioBtn" />
            <p>Upload a logo file</p>
          </div>
          <section className="dragSection">
            <div {...dragDropContext.getRootProps()}>
              <input {...dragDropContext.getInputProps()} type="file" />
              <p className="withBtn">
                Drag 'n' drop some files here, or click to select files
                <button>Choose File</button>
              </p>
            </div>
            <p>JPG, PNG, All Image</p>
            <p className="fileSizeMax">Max Size: 5 mb</p>
            <p>{dragDropContext.thumbs}</p>
          </section>
        </div>
        <p className="proofText">
          Don't worry how it looks, we will make it look great and send a proof
          before we add to your products.
        </p>
        <div className="contactForLogo">
          <div className="contactForLogoTitle">
            <input type="radio" name="radioBtn" />
            <p>Contact me for a logo</p>
          </div>
          <div className="contactForLogoArea">
            <p>Special Instruction</p>
            <textarea
              onChange={dragDropContext.getTextArea}
              name="SpecialInstruction"
              id="specialInstruction"
              cols="134"
              rows="3"
              placeholder="Please let us know if you have any special requirments"
            ></textarea>
          </div>
          <div className="textConfigureLogo">
            <form type="submit">
              <label htmlFor="text1">Text Line:</label>
              <input
                onChange={dragDropContext.getTextLine}
                type="text"
                id="text1"
                name="text1"
                placeholder="Optional"
              />
            </form>
            <form type="submit">
              <label htmlFor="Font">Font:</label>
              <input
                onChange={dragDropContext.getFont}
                type="text"
                id="Font"
                name="Font"
                placeholder="Optional"
              />
            </form>
            <form type="submit">
              <label htmlFor="colour">Colour:</label>
              <input
                onChange={dragDropContext.getLogoColor}
                type="text"
                id="colour"
                name="colour"
                placeholder="Optional"
              />
            </form>
          </div>
        </div>
      </div>
      <Link to="/product/basket">
        <button className="basketBtn">Go to Basket</button>
      </Link>
    </div>
  );
}

export default DragAndDrop;
