import React from "react";
import { Route } from "react-router-dom";
import Login from "../components/Login/Login";
import PropTypes from "prop-types";

export default class PrivateRoute extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (this.props.logged !== nextProps.logged)
  }
  render() {
    const Component = this.props.component
    const logged = this.props.logged

    return (
      <Route
        {...this.props}
        component={() => {
          return logged ? (
            <Component />
          ) : (
              <Login setSession={this.props.setSession} path={this.props.path} />
            );
        }}
      />
    );
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.func,
  setSession: PropTypes.func,
  path: PropTypes.string,
  logged: PropTypes.bool
}

