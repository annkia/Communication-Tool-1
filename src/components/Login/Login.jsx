import React from "react";
import style from "./Login.module.scss";
import GoogleLogin from "react-google-login";

export default class Login extends React.Component {
  render() {
    const responseGoogle = response => {
      console.log(response);
    };

    return (
      <React.Fragment>
        <div className={style.login}>
          <p>Siemano</p>
          <GoogleLogin
            className={style.login__googleButton}
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </div>
      </React.Fragment>
    );
  }
}
