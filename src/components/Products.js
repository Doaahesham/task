import React, { Component } from "react";
import ProductSort from "./ProductSort";

class Products extends Component {
  render() {
    return (
      <div className="products-style">
        {this.props.uniqueProducts &&
          this.props.uniqueProducts.map((prodname, i) => (
            <ProductSort
              key={i}
              prodname={prodname}
              products={this.props.products}
            />
          ))}
      </div>
    );
  }
}

export default Products;
