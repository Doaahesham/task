import "./App.css";
import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Title from "./components/Title";
import Products from "./components/Products";

class App extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    const getData = async () => {
      const api = await fetch("https://assessment-edvora.herokuapp.com/");
      const data = await api.json();
      this.setState({ products: [...data] });
    };
    getData();
  }

  render() {
    const uniqueProducts = [
      ...new Set(this.state.products.map((product) => product.product_name)),
    ];
    const uniqueStates = [
      ...new Set(this.state.products.map((product) => product.address.state)),
    ];
    const uniqueCities = [
      ...new Set(this.state.products.map((product) => product.address.city)),
    ];
    // console.log(uniqueStates);
    // console.log(uniqueCities);
    return (
      <div>
        {console.log(this.state.products)}
        <Title />
        <Sidebar uniqueProducts={uniqueProducts} uniqueStates={uniqueStates} uniqueCities={uniqueCities} />
        <Products products={this.state.products} uniqueProducts={uniqueProducts}/>
      </div>
    );
  }
}

export default App;
