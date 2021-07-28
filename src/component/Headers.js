import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Headers.css";

function Headers() {
  return (
    <div className="headers">
      <div className="headers__name">
        <Link to="/product/addLogo">Task: Making Logo Section</Link>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search Section will not work, Click Basket for Cart Item"
          className="headerInput"
        />
        <button type="button" className="HeaderBtn">
          Search
        </button>
      </div>
      <div className="headers__options">
        <Link to="/product/basket">Basket</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Headers;
