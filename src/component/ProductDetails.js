import React from "react";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

function ProductDetails({ product }) {
  return (
    <div className="productDetails">
      <div className="productName">
        <h1>{product.name}</h1>
        <h4>{product.brand}</h4>
      </div>
      <div className="code">Product Code: {product.code}</div>
      <div className="productImage">
        <img src={product.image} alt="product" />
      </div>
      <div className="priceInfo">
        <h4>Plain Pricing</h4>
        <p>Adding a logo or text? Use our sample</p>
        <div className="priceInfoCalc">
          {<AttachMoneyIcon />}
          <a
            href="https://www.online-calculator.com/full-screen-calculator/"
            target="_blank"
            rel="noreferrer"
          >
            Price Calculator
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
