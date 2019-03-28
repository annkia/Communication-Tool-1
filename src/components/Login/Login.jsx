import React from "react";
import style from "./Login.module.scss";
import GoogleLogin from "react-google-login";
import clientId from "../../secret/clientId";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  redirectAndSetSession = data => {
    console.log("otrzymana data", data);
    this.props.changeLoginState(data);
    console.log("propsy w aap", this.props);
    this.props.history.push("/dashboard");
  };

  render() {
    const responseGoogle = response => {
      console.log("Od google", response);
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
          console.log(response);
          return response.json();
        })
        .catch(err => console.log(err))
        .then(res => {
          console.log(res.authenticationToken);
          this.redirectAndSetSession(res.authenticationToken);
        });
    };

    return (
      <React.Fragment>
        <div className={style.login}>
          <div className={style.login__text}>
            <h1>Hello stranger</h1>
            <p>
              To go any further please log in <br /> You can do this really fast
              using Google
            </p>
          </div>

          <GoogleLogin
            clientId={clientId}
            render={renderProps => (
              <form
                className={style.login__googleButton}
                onClick={renderProps.onClick}
              >
                {/* <button className={style.login__inGoogleButton} /> */}
                <img src="../../assets/googleLogo.svg" />
              </form>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(Login);
