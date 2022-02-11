import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div className="side">
        <div className="side-container">
          <input placeholder="Filters" className="filter" />

          <select className="style-select first-style">
            <option>Products</option>
          </select>

          <select className="style-select">
            <option>State</option>
          </select>
          <select className="style-select">
            <option>City</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Sidebar;
