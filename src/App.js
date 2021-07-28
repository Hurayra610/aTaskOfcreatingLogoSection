import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HomeScren from "./component/HomeScren";
import LogoSection from "./component/LogoSection";
import ProductScren from "./component/ProductScren";
import { DataProvider } from "./component/DataContext";
import Basket from "./component/Basket";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <div className="App">
          <Route path="/" component={HomeScren} exact />
          <Route path="/product/:id" component={ProductScren} />
          <Route path="/product/addLogo" component={LogoSection} />
          <Route path="/product/basket" component={Basket} />
        </div>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
