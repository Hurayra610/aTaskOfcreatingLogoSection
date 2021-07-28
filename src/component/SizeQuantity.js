import React, { useContext } from "react";
import AddToBasket from "./AddToBasket";
import "./CSS/SizeQuantity.css";
import { DataContext } from "./DataContext";

function SizeQuantity({ product }) {
  const sqContext = useContext(DataContext);
  const showBasket = () => {
    const element = document.querySelector(".addToBasket");
    element.style.display = "block";
  };
  return (
    <div className="allSandQ">
      <h2 className="pageTitle">2. Size & Quantities</h2>
      <div className="sizeQuantity">
        <div className="size">
          <input type="checkbox" onClick={sqContext.getSizeXs} />
          <p onClick={sqContext.getSizeXs} id="xs">
            XS
          </p>
        </div>
        <div className="quantity">
          <div className="stockInformation">
            <h4>{product.quantity > 0 ? "In Stock" : "Unavailable"}</h4>
            <p>{product.quantity} Available</p>
          </div>
          <div className="quantityArea">
            <button
              onClick={sqContext.decrementValue}
              className="decrementBtn"
              id="xsdecrement"
            >
              -
            </button>
            <p className="value">
              {sqContext.numItem > 0 ? sqContext.numItem : 0}
            </p>
            <button onClick={sqContext.incrementValue} className="incrementBtn">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="sizeQuantity">
        <div className="size">
          <input type="checkbox" onClick={sqContext.getSizeS} />
          <p onClick={sqContext.getSizeS} id="s">
            S
          </p>
        </div>
        <div className="quantity">
          <div className="stockInformation">
            <h4>{product.quantity > 0 ? "In Stock" : "Unavailable"}</h4>
            <p>{product.quantity} Available</p>
          </div>
          <div className="quantityArea">
            <button
              onClick={sqContext.decrementValue1}
              className="decrementBtn"
              id="sdecrement"
            >
              -
            </button>
            <p className="value">
              {sqContext.numItem1 > 0 ? sqContext.numItem1 : 0}
            </p>
            <button
              onClick={sqContext.incrementValue1}
              className="incrementBtn"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="sizeQuantity">
        <div className="size">
          <input type="checkbox" onClick={sqContext.getSizeM} />
          <p onClick={sqContext.getSizeM} id="m">
            M
          </p>
        </div>
        <div className="quantity">
          <div className="stockInformation">
            <h4>{product.quantity > 0 ? "In Stock" : "Unavailable"}</h4>
            <p>{product.quantity} Available</p>
          </div>
          <div className="quantityArea">
            <button
              onClick={sqContext.decrementValue2}
              className="decrementBtn"
              id="mdecrement"
            >
              -
            </button>
            <p className="value">
              {sqContext.numItem2 > 0 ? sqContext.numItem2 : 0}
            </p>
            <button
              onClick={sqContext.incrementValue2}
              className="incrementBtn"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="sizeQuantity">
        <div className="size">
          <input type="checkbox" onClick={sqContext.getSizeL} />
          <p onClick={sqContext.getSizeL} id="l">
            L
          </p>
        </div>
        <div className="quantity">
          <div className="stockInformation">
            <h4>{product.quantity > 0 ? "In Stock" : "Unavailable"}</h4>
            <p>{product.quantity} Available</p>
          </div>
          <div className="quantityArea">
            <button
              onClick={sqContext.decrementValue3}
              className="decrementBtn"
              id="ldecrement"
            >
              -
            </button>
            <p className="value">
              {sqContext.numItem3 > 0 ? sqContext.numItem3 : 0}
            </p>
            <button
              onClick={sqContext.incrementValue3}
              className="incrementBtn"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="sizeQuantity">
        <div className="size">
          <input type="checkbox" onClick={sqContext.getSizeXl} />
          <p onClick={sqContext.getSizeXl} id="xl">
            XL
          </p>
        </div>
        <div className="quantity">
          <div className="stockInformation">
            <h4>{product.quantity > 0 ? "In Stock" : "Unavailable"}</h4>
            <p>{product.quantity} Available</p>
          </div>
          <div className="quantityArea">
            <button
              onClick={sqContext.decrementValue4}
              className="decrementBtn"
              id="xldecrement"
            >
              -
            </button>
            <p className="value">
              {sqContext.numItem4 > 0 ? sqContext.numItem4 : 0}
            </p>
            <button
              onClick={sqContext.incrementValue4}
              className="incrementBtn"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="sizeQuantity">
        <div className="size">
          <input type="checkbox" onClick={sqContext.getSizeXxl} />
          <p onClick={sqContext.getSizeXxl} id="xxl">
            2XL
          </p>
        </div>
        <div className="quantity">
          <div className="stockInformation">
            <h4>{product.quantity > 0 ? "In Stock" : "Unavailable"}</h4>
            <p>{product.quantity} Available</p>
          </div>
          <div className="quantityArea">
            <button
              onClick={sqContext.decrementValue5}
              className="decrementBtn"
              id="xxldecrement"
            >
              -
            </button>
            <p className="value">
              {sqContext.numItem5 > 0 ? sqContext.numItem5 : 0}
            </p>
            <button
              onClick={sqContext.incrementValue5}
              className="incrementBtn"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button onClick={showBasket} type="submit" className="basketBtn">
        Add To Basket
      </button>
      <AddToBasket
        product={product}
        item1={sqContext.numItem}
        item2={sqContext.numItem1}
        item3={sqContext.numItem2}
        item4={sqContext.numItem3}
        item5={sqContext.numItem4}
        item6={sqContext.numItem5}
        productSize={sqContext.size}
      />
    </div>
  );
}

export default SizeQuantity;
