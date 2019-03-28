import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import style from "./App.module.scss";
import PrivateRoute from "../PrivateRoute";

import Dashboard from "../Dashboard/Dashboard";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    };
  }

  changeLoginState = data => {
    this.setSession(data);
    console.log("zmiana statuna", this.state.isLogged);
    this.setState(() => {
      return { isLogged: true };
    });
  };

  setSession(data) {
    sessionStorage.setItem("userId", data);
    console.log("w sesji", sessionStorage);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <PrivateRoute
            exact
            path="/"
            component={Dashboard}
            isLogged={this.state.isLogged}
            changeLoginState={this.changeLoginState}
          />
          <PrivateRoute
            path="/dashboard"
            component={Dashboard}
            isLogged={this.state.isLogged}
            changeLoginState={this.changeLoginState}
          />
        </BrowserRouter>
      </div>
    );
  }
}
