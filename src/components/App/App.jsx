import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import style from "./App.module.scss";

import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true
    };
  }
  // Methods
  loginState() {
    this.setState({
      login: true
    })
  }

  redirectRout() {
    if (this.login)
      return <Redirect to="/dashboard"></Redirect>
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/"
        >

        </Route>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    );
  }
}

export default App;
