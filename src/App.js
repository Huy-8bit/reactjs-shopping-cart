import React from "react";
import Cart from "./containers/Cart";
import ProductList from "./containers/ProductList";
import './index.css';

const App = () => {
  return (
    <div className="container">
      <div className="background-container">
        <div className="yellow-background"></div>
        <div className="white-background"></div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <ProductList />
        </div>
        <div className="col-md-4">
          <Cart />
        </div>
      </div>
      <footer>&copy; Em không chuyên front end nên code không được tốt mảng này :( </footer>
      <div className="patch1"></div>
      <div className="patch2"></div>
    </div>
  );
};

export default App;
