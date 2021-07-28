import React, { useContext } from "react";
import "./CSS/ProductScren.css";
import Headers from "./Headers";
import PriceItem from "./PriceItem";
import SelectColor from "./SelectColor";
import ProductDetails from "./ProductDetails";
import { DataContext } from "./DataContext";
import SizeQuantity from "./SizeQuantity";

function ProductScren(props) {
  const productArray = useContext(DataContext);
  const idMatch = props.match.params.id;
  const products = productArray.data.filter((response) => {
    return response.id === parseInt(idMatch);
  });
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Headers />
          <div className="productScreen">
            <ProductDetails product={product} />
            <hr />
            <PriceItem product={product} />
            <hr />
            <SelectColor product={product} />
            <hr />
            <SizeQuantity product={product} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductScren;
