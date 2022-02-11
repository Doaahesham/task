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
      console.log("lkj");
      this.setState({ products: [...data] });
    };
    getData();
  }

  render() {
    return (
      <div>
        {this.state.products}
        <Title />
        <Sidebar />
        <Products />
      </div>
    );
  }
}

export default App;
