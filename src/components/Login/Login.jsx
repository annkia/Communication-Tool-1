import React from "react";
import style from "./Login.module.scss";
import GoogleLogin from "react-google-login";
import clientId from "../../secret/clientId";
import { Grid } from '@material-ui/core'

export default class Login extends React.Component {
  checkSesion() {
    let sesja = sessionStorage;
    if (sesja.length > 0) {
      console.log("Sesja rozpoczęta z User ->", sesja);
    } else {
      console.log("Storage jest pusty patrz ->", sesja);
    }
  }

  setSession(data) {
    sessionStorage.setItem("userId", data);
    console.log("poszła sesja");
  }

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
          this.setSession(res.authenticationToken);
        });
    };

    const keyAuth = "";

    return (
      <React.Fragment>
        <div >
          <Grid
            container
            direction="column"
            alignContent="center"


          >
            <Grid item className={style.login}>
              <h1>Hello stranger</h1>
              <p>To go any further please log in</p>
              <GoogleLogin
                className={style.login__googleButton}
                clientId={clientId}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />
              <button onClick={this.checkSesion}>session</button>
            </Grid>
          </Grid>

        </div>
      </React.Fragment>
    );
  }
}
