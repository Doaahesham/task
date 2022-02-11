import React, { Component } from 'react'
import ProductSort from './ProductSort';

class Products extends Component {
  
    render() {
        return (
<div className="products-style"> 
    <ProductSort/>
    <ProductSort/>

</div>
        );
    }
}

export default Products;