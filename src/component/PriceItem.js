import React from "react";

function PriceItem({ product }) {
  return (
    <div className="priceItem">
      <div className="Item">
        <p>1 item</p>
        <h3>£{product.price}</h3>
      </div>
      <div className="Item">
        <p>25+ items</p>
        <h3>£{product.price25}</h3>
        <span>save 5%</span>
      </div>
      <div className="Item">
        <p>50+ items</p>
        <h3>£{product.price50}</h3>
        <span>save 12%</span>
      </div>
      <div className="Item">
        <p>75+ items</p>
        <h3>£{product.price75}</h3>
        <span>save 16%</span>
      </div>
      <div className="Item">
        <p>150+ items</p>
        <h3>£{product.price150}</h3>
        <span>save 20%</span>
      </div>
    </div>
  );
}

export default PriceItem;
