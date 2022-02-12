import React, { Component } from "react";
import ProductSort from "./ProductSort";

class Products extends Component {


  render() {
    console.log(this.props.products);
    console.log(this.props.productsToshow);

    return (
      <div className="products-style">
        {this.props.products&&this.props.uniqueProducts.map((prodname, i) => (
          <ProductSort
            key={i}
            prodname={prodname}
            products={this.props.productsToshow}
          />
        ))}
      </div>
    );
  }
}

export default Products;

// {(this.props.selectedprod === "Products" ||
//           this.props.selectedprod === "") &&
//         (this.props.selectedstate === "State" ||
//           this.props.selectedstate === "") ? (
//           this.props.uniqueProducts.map((prodname, i) => {
//             console.log("na el 5ra");
//             return <ProductSort
//               key={i}
//               prodname={prodname}
//               products={this.props.products}
//             />
//           })
//         ) : this.props.selectedprod !== "Products" ||
//           this.props.selectedprod !== "" ? (
//           <ProductSort
//             prodname={this.props.selectedprod}
//             products={this.props.products.filter((product) => {
//               return this.props.selectedprod === product.product_name;
//             })}
//           />
//         ) : this.props.selectedstate !== "State" ||
//           this.props.selectedstate !== "" ? (
//           this.props.uniqueProducts.map((prodname, i) => {
//             console.log("na el state");
//             return (
//               <ProductSort key={i} prodname={prodname} products={[4, 5, 6]} />
//             );
//           })
//         ) : (

//           <ProductSort
//             prodname={this.props.selectedprod}
//             products={[1, 2, 3]}
//           />
//         )

//         }
