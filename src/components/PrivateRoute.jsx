import React from "react";
import { Route } from "react-router-dom";
import Login from '../components/Login/Login'
import PropTypes from "prop-types"

export default class PrivateRoute extends React.Component {

  UNSAFE_componentWillReceiveProps() {

  }
  render() {
    const isLogged = this.props.isLogged
    const Component = this.props.component
    const logged = sessionStorage.length > 0
    console.log(logged)
    console.log('props z Priv', isLogged)
    console.log('sesja', sessionStorage.length > 0)

    return (
      <Route
        {...this.props}
        component={() => {
          return logged ? (
            <Component />
          ) : (
              <Login changeLoginState={this.props.changeLoginState} />
            );
        }}
      />
    );
  }
}

PrivateRoute.propTypes = {
  isLogged: PropTypes.bool,
  component: PropTypes.func,
  changeLoginState: PropTypes.func
}

