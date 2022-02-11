import React, { Component } from "react";
import ProductDetails from "./ProductDetails";

class ProductSort extends Component {
  render() {
    return (
      <div className="prod-sort">
        <p className="product-name">Product Name</p>
        <ul className="products-list">
          <ProductDetails />
        </ul>
      </div>
      
      
    );
  }
}

export default ProductSort;
