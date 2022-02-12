import React, { Component } from "react";

class Sidebar extends Component {

  render() {
    return (
      <div className="side">
        <div className="side-container">
          <p className="filter">Filters</p>
          <select className="style-select first-style" id="productsnames" onChange={this.props.selectedProduct}>
            <option>Products</option>
            {console.log(this.props.uniqueProducts)}
            {this.props.uniqueProducts.map((product, i) => {
              return <option key={i}>{product}</option>;
            })}
          </select>

          <select className="style-select" id="productsstates" onChange={this.props.selectedState}>
            <option>State</option>
            {console.log(this.props.uniqueStates)}
            {this.props.uniqueStates.map((state, i) => {
              return <option key={i}>{state}</option>;
            })}
          </select>
          <select className="style-select" id="productscities" onChange={this.props.selectedCity} >
            <option>City</option>
            {console.log(this.props.uniqueCities)}
            {this.props.uniqueCities.map((city, i) => {
              return <option key={i}>{city}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default Sidebar;
