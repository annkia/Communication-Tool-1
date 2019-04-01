import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
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

library.add(faTrash, faEdit, faExclamationTriangle, faWindowClose)

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    };
  }

  logoutAndClearSession = () => {
    this.setState(() => {
      return { logged: false }
    })
    sessionStorage.clear();
  }

  setSession = data => {
    sessionStorage.setItem("userId", data);
    sessionStorage.setItem("logged", true);
    this.setState(() => {
      return {
        logged: sessionStorage.logged
      }
    })
  }

  render() {
    return (
      <div className={style.App}>
        <BrowserRouter>
          <Header handleOnClick={this.logoutAndClearSession} logged={this.state.logged} />
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
