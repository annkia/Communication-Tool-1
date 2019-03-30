import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import style from "./App.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEdit,
  faTrash,
  faExclamationTriangle,
  faWindowClose
} from "@fortawesome/free-solid-svg-icons";

import PrivateRoute from "../PrivateRoute";
import Dashboard from "../Dashboard/Dashboard";
import Header from '../Header/Header';
import ProfilePage from '../ProfilePage/ProfilePage'
import Footer from '../Footer/Footer';
import { Maincontent } from '../Maincontent/Maincontent.jsx';
import { Buttonspanel } from '../Buttonspanel/Buttonspanel.jsx';

library.add(faTrash, faEdit, faExclamationTriangle, faWindowClose)

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: [],
      auth: false
    };
  }

  setSession = data => {
    sessionStorage.setItem("userId", data);
    console.log("stan przed", this.state)
    this.setState(() => {
      return {
        userId: sessionStorage.userId,
        auth: true
      }
    })
    console.log("stan po", this.state)
  }

  logOutAndClearSession = () => {
    this.setSession(() => {
      return { auth: false }
    })
    sessionStorage.clear();
  }



  render() {
    return (
      <div className={style.App}>
        <BrowserRouter>
          <Header auth={this.state.auth} handleOnClick={this.logOutAndClearSession} />
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
          <PrivateRoute
            path="/profilePage"
            component={ProfilePage}
            setSession={this.setSession}
          />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
