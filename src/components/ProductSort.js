import React, { Component } from "react";
import ProductDetails from "./ProductDetails";

class ProductSort extends Component {
  render() {
    return (
      <div className="prod-sort">
        <p className="product-name">{this.props.prodname}</p>
        <ul className="products-list">
          {this.props.products &&
            this.props.products
              .filter((product) => {
                return this.props.prodname === product.product_name;
              })
              .map((product, i) => {
                return (
                  <ProductDetails
                    key={i}
                    productName={product.product_name}
                    brandName={product.brand_name}
                    img={product.image}
                    price={product.price}
                    discription={product.discription}
                    date={product.date}
                    location={product.address.city}
                  />
                );
              })}
        </ul>
      </div>
    );
  }
}

export default ProductSort;
