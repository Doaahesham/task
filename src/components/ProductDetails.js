import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
// import HorizontalSlider from 'react-horizontal-slider'
class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <li className="item">
          <div className="item-container">
            <div className="img-p-style">
              <div>
                <img src={this.props.img} alt="img"/>
              </div>
              <div>
              <p className="productName">{this.props.productName}</p>
              <p className="brandName">{this.props.brandName}</p>
              <p className="price">${this.props.price}</p>
              </div>
            </div>
            <div className="span-p">
              <div className="loc-date">
                <p className="brandName">{this.props.location}</p>
                <p className="brandName">{this.props.date}</p>
              </div>
              <p className="description">{this.props.discription}</p>
            </div>
          </div>
        </li>
      </Fragment>
    );
  }
}

export default ProductDetails;
