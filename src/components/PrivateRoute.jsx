import React from "react";
import { Redirect, Route } from "react-router-dom";

export default class PrivateRoute extends React.Component {
  render() {
    const isLogged = sessionStorage.length > 0;
    const Component = this.props.component;
    return (
      <Route
        {...this.props}
        component={() => {
          return isLogged ? (
            <Component />
          ) : (
            <Redirect to="/login?redirectPath=dashboard" />
          );
        }}
      />
    );
  }
}
