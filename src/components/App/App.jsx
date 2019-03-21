import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import style from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <p className={style.App}>Siemano</p>
        <Route to="" component="" />
      </BrowserRouter>
    );
  }
}

export default App;
