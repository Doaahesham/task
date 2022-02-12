import React, { Component } from "react";
import ProductSort from "./ProductSort";

class Products extends Component {
  render() {
    return (
      <div className="products-style">
        {this.props.selectedprod === "Products" ||
        this.props.selectedprod === ""
          ? this.props.uniqueProducts.map((prodname, i) => (
              <ProductSort
                key={i}
                prodname={prodname}
                products={this.props.products}
              />
            ))
          : this.props.uniqueProducts
              .filter((prodname) => {
                return this.props.selectedprod === prodname;
              })
              .map((prodname, i) => (
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
