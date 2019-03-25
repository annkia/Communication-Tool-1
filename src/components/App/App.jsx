import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import style from "./App.module.scss";
import PrivateRoute from "../PrivateRoute";

import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
