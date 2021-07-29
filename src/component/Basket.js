import React, { useContext } from "react";
import "./CSS/Basket.css";
import { DataContext } from "./DataContext";
import LeftBreast from "./image/01.jpg";
import RightBreast from "./image/02.jpg";
import LeftSleeve from "./image/04.jpg";
import RightSleeve from "./image/05.jpg";
import BigBack from "./image/07.jpg";
import BigFront from "./image/06.jpg";
import Headers from "./Headers";

function Basket() {
  const basketValue = useContext(DataContext);
  const totalItem =
    basketValue.numItem +
    basketValue.numItem1 +
    basketValue.numItem2 +
    basketValue.numItem3 +
    basketValue.numItem4 +
    basketValue.numItem5;
  return (
    <>
      <Headers />
      <div className="basketContainer" id="basketSection">
        <h1>Basket</h1>
        <div className="basket">
          <h2 className="bundleSummary">Bundle Summary</h2>
          <hr />
          <div className="colorSizeQuantity">
            <p>Colour</p>
            <p>Size</p>
            <p>Quantity</p>
          </div>
          <hr />
          {basketValue.color.map((clr) => {
            return (
              <>
                <div className="colorSizeQuantityValue">
                  <p className="basketProductColor">{clr}</p>
                  <div className="displaySizeInBasket">
                    {basketValue.size.map((sz) => {
                      return (
                        <>
                          <p className="basketProductSize">
                            <div className="pureSIze">{sz}</div>
                            <span className="basketProductQty">
                              {(sz === "XS" && basketValue.numItem) ||
                                (sz === "S" && basketValue.numItem1) ||
                                (sz === "M" && basketValue.numItem2) ||
                                (sz === "L" && basketValue.numItem3) ||
                                (sz === "XL" && basketValue.numItem4) ||
                                (sz === "2XL" && basketValue.numItem5)}
                            </span>
                          </p>
                        </>
                      );
                    })}
                  </div>
                </div>
                <hr />
              </>
            );
          })}

          <div className="itemQuantity">
            <p className="totalItems">Total Items</p>
            <p className="totalQuantity">{totalItem}</p>
          </div>
          <div className="bundlePriceQuantity">
            <p className="bundlePriceText">Bundle Price</p>
            <p className="bundlePrice">
              <span id="afterDisc">After Discount:</span> £78
            </p>
          </div>
          <h2 className="customizations">Customizations</h2>
          {basketValue.position.map((positionName) => {
            return (
              <>
                {basketValue.method.map((mn) => {
                  return (
                    <div className="logoFee">
                      <div className="logoDetails">
                        <div className="logoImage">
                          <img
                            src={
                              (positionName === "Left Breast" && LeftBreast) ||
                              (positionName === "Right Breast" &&
                                RightBreast) ||
                              (positionName === "Left Sleeve" && LeftSleeve) ||
                              (positionName === "Right Sleeve" &&
                                RightSleeve) ||
                              (positionName === "Big Back" && BigBack) ||
                              (positionName === "Big Front" && BigFront)
                            }
                            alt="logoImage"
                          />
                        </div>

                        <div className="logoContent">
                          <p className="logoType">{mn}</p>
                          <p className="logoPosition">
                            {positionName}{" "}
                            <span className="freeText">FREE</span>
                          </p>
                        </div>
                      </div>

                      <div className="logoPrice">+£0.00</div>
                    </div>
                  );
                })}
              </>
            );
          })}
          {basketValue.artWork && (
            <div className="showArtWork">
              <div className="CustomLogo">
                <p className="basketArtWork">{basketValue.artWork}</p>
                <p className="basketAppType">{basketValue.appType}</p>
              </div>
              <div className="picColorFont">
                <p className="basketLogoImage">{basketValue.thumbs}</p>
                <div className="fontColor">
                  <p basketColorName>Colour: {basketValue.logoColor}</p>
                  <p className="basketFontName">Font: '{basketValue.font}'</p>
                </div>
              </div>
              <p className="basketTextLine">{basketValue.textLine}</p>
              <p className="basketTextArea">{basketValue.textArea}</p>
            </div>
          )}
          <div className="totalAmmount">
            <p className="totalText">Total</p>
            <p className="totalPrice">
              £
              {(basketValue.numItem +
                basketValue.numItem1 +
                basketValue.numItem2 +
                basketValue.numItem3 +
                basketValue.numItem4 +
                basketValue.numItem5) *
                78}
            </p>
          </div>
          <a href="/">
            <button
              onClick={() => alert("Order Confirmed, Thanks For Shopping...")}
              className="orderBtn"
            >
              Order Now
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Basket;
