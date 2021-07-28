import React, { useContext } from "react";
import "./CSS/Content.css";
import { DataContext } from "./DataContext";

function Content() {
  const dataArray = useContext(DataContext);
  return (
    <div className="content">
      {dataArray.data.map((info) => (
        <div key={info.id} className="card">
          <a href={`/product/${info.id}`}>
            <img src={info.image} className="img" alt="product_img" />
          </a>
          <div className="card__body">
            <a href={`/product/${info.id}`}>
              <h2>{info.name}</h2>
            </a>
          </div>
          <div className="price">£{info.price}</div>
        </div>
      ))}
    </div>
  );
}

export default Content;
