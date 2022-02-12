import "./App.css";
import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Title from "./components/Title";
import Products from "./components/Products";

class App extends Component {
  state = {
    products: [],
    selectedprod: "",
    selectedstate: "",
    selectedcity: "",
  };

  componentDidMount() {
    const getData = async () => {
      const api = await fetch("https://assessment-edvora.herokuapp.com/");
      const data = await api.json();
      this.setState({ products: [...data] });
    };
    getData();
  }

  selectedProduct = () => {
    var selectprod = document.getElementById("productsnames").value;
    this.setState({ selectedprod: selectprod });
    // alert(selectprod)
  };
  selectedState = () => {
    var selectstat = document.getElementById("productsstates").value;
    this.setState({ selectedstate: selectstat });
    // alert(selectstat);
  };
  selectedCity = () => {
    var selectcit = document.getElementById("productscities").value;
    this.setState({ selectedcity: selectcit });
    // alert(selectcit);
  };

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
        {console.log(this.state.selectedprod)}
        {console.log(this.state.selectedstate)}
        {console.log(this.state.selectedcity)}

        <Title />
        <Sidebar
          uniqueProducts={uniqueProducts}
          uniqueStates={uniqueStates}
          uniqueCities={uniqueCities}
          selectedProduct={this.selectedProduct}
          selectedState={this.selectedState}
          selectedCity={this.selectedCity}
        />
        <Products
          products={this.state.products}
          uniqueProducts={uniqueProducts}
          selectedprod={this.state.selectedprod}
        />
      </div>
    );
  }
}

export default App;
