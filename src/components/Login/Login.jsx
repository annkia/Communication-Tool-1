import React from "react";
import style from "./Login.module.scss";
import GoogleLogin from "react-google-login";
import clientId from "../../secret/clientId";
import { withRouter } from "react-router-dom";

class Login extends React.Component {

  redirectAndSetSession = data => {
    this.props.setSession(data);
    this.props.history.push(this.props.path);
  };

  render() {
    const responseGoogle = response => {
      fetch(
        "https://delfinkitrainingapi.azurewebsites.net/.auth/login/google",
        {
          method: "POST",
          body: JSON.stringify({
            id_token: response.tokenId
          })
        }
      )
        .catch(err => console.log(err))
        .then(response => {
          return response.json();
        })
        .catch(err => console.log(err))
        .then(res => {
          this.redirectAndSetSession(res.authenticationToken);
        });
    };

    return (
      <React.Fragment>
        <div className={style.container}>
          <div className={style.login}>
            <div className={style.text}>
              <h1>Hello stranger</h1>
              <p>
                To go any further please log in <br /> You can do this really fast
                using Google
            </p>
            </div>

            <GoogleLogin
              clientId={clientId}
              render={renderProps => (
                <form className={style.googleButton} onClick={renderProps.onClick}>
                  <img src="../../assets/googleLogo.svg" alt="Google Logo" />
                </form>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(Login);
