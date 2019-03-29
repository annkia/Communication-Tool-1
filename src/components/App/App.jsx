import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import style from "./App.module.scss";
import PrivateRoute from "../PrivateRoute";

import Dashboard from "../Dashboard/Dashboard";
import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';
import { Maincontent } from '../Maincontent/Maincontent.jsx';
import { Buttonspanel } from '../Buttonspanel/Buttonspanel.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: [],
      person: {
        name: 'Jane',
        surname: 'Doe',
      },
      image: ""
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
