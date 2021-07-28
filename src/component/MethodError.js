import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./CSS/MethodError.css";

function MethodError() {
  const errSting =
    "Embroidery (stitching) isn't available for one of the bellow reasons:";
  const reason1 =
    "The garment weight (GSM) is too low to allow embroidery on this position.";
  const reason2 = "Embroidery isn't an applicable on this product/bundle.";
  const reason3 = "You have choosen a Print only artwork position.";
  return (
    <div className="methodError">
      <h5>
        {<ErrorIcon />}
        <span>{errSting}</span>
      </h5>
      <ul>
        <li>{reason1}</li>
        <li>{reason2}</li>
        <li>{reason3}</li>
      </ul>
      <p>
        Please call us on{" "}
        <span>
          <u>+8801997-260226</u>
        </span>{" "}
        if you wish to embroidery this item we might be able to help!
      </p>
    </div>
  );
}

export default MethodError;
