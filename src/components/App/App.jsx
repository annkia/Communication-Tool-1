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
import Header from "../Header/Header";
import ProfilePage from "../ProfilePage/ProfilePage";
import Footer from "../Footer/Footer";

library.add(faTrash, faEdit, faExclamationTriangle, faWindowClose);

export default class App extends Component {
  state = {
    userId: [],
    auth: false,
    posts: []
  };

  setSession = data => {
    sessionStorage.setItem("userId", data);
    this.setState(() => {
      return {
        userId: sessionStorage.userId,
        auth: true
      };
    });
  };

  logOutAndClearSession = () => {
    this.setSession(() => {
      return { auth: false };
    });
    sessionStorage.clear();
  };

  render() {
    return (
      <div className={style.App}>
        <BrowserRouter>
          <Header
            auth={this.state.auth}
            handleOnClick={this.logOutAndClearSession}
          />
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
