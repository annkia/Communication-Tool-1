import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import style from "./App.module.scss";
import PrivateRoute from "../PrivateRoute";

import Dashboard from "../Dashboard/Dashboard";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: []
    };
  }

  setSession = data => {
    sessionStorage.setItem("userId", data);
    this.setState(() => {
      return { userId: sessionStorage.userId }
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <PrivateRoute
            exact
            path="/"
            component={Dashboard}
            setSession={this.setSession}

          />
          <PrivateRoute
            path="/dashboard"
            component={Dashboard}
            setSession={this.setSession}

          />
        </BrowserRouter>
      </div>
    );
  }
}
