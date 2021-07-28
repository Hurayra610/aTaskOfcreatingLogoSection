import React, { useContext } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ClearIcon from "@material-ui/icons/Clear";
import "./CSS/AddToBasket.css";
import { Link } from "react-router-dom";
import { DataContext } from "./DataContext";

function AddToBasket({
  product,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  productSize,
}) {
  const addToBasketContext = useContext(DataContext);
  const closeTab = () => {
    const element = document.querySelector(".addToBasket");
    element.style.display = "none";
  };
  return (
    <div className="addToBasket">
      <div className="basketHeader">
        <CheckCircleIcon />
        <p>Added to Basket</p>
        <button onClick={closeTab}>{<ClearIcon />}</button>
      </div>
      <hr />
      <div className="productDetailsBasket">
        <img src={product.image} alt="product" />
        <div className="productInfo">
          <h2>{product.name}</h2>
          <p>Product Code: {product.code}</p>
          <div className="colorSizeQ">
            {addToBasketContext.color.map((clr) => {
              return (
                <div className="productItemInCart">
                  {productSize.map((pSize) => {
                    return (
                      <p className="itemReview">
                        {clr} / {pSize} x{" "}
                        {(pSize === "XS" && item1) ||
                          (pSize === "S" && item2) ||
                          (pSize === "M" && item3) ||
                          (pSize === "L" && item4) ||
                          (pSize === "XL" && item5) ||
                          (pSize === "2XL" && item6)}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="itemAmount">
        <h3>{item1 + item2 + item3 + item4 + item5 + item6} items</h3>
        <div className="priceTotal">
          <h3>
            £{product.price} <span>per item</span>
          </h3>
          <h3>
            <span>Total: </span>£
            {(item1 + item2 + item3 + item4 + item5 + item6) * product.price}
            <span> ex. VAT</span>
          </h3>
        </div>
      </div>
      <div className="logoBasketBtn">
        <Link to="/product/addLogo">
          <button className="addLogoBtn">Add Logo Now </button>
        </Link>
        <Link to="/product/basket">
          <button className="viewBasketBtn">View Basket</button>
        </Link>
      </div>
      <Link to="/">Continue Shopping...</Link>
    </div>
  );
}

export default AddToBasket;
