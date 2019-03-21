import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import style from "./App.module.scss";

import Login from "../Login/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <Route to="/" component={Login} />
      </BrowserRouter>
    );
  }
}

export default App;
