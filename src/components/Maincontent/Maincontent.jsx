import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "./Maincontent.module.scss";

import { Photo } from "../Photo/Photo.jsx";
import { Profileinfo } from "../Profileinfo/Profileinfo.jsx";

export class Maincontent extends React.Component {
  render() {
    console.log(this.props.profilePhoto);
    return (
      <Grid container>
        <Grid item xs={12} className={styles.FooterToolbar1}>
          <h1 className={styles.PageTitle}>Profile Page</h1>
        </Grid>

        <Grid item sm={6}>
          <Photo profilePhoto={this.props.profilePhoto} />
        </Grid>
        <Grid item sm={6}>
          <Profileinfo
            profileInfoName={this.props.profileInfoName}
            profileInfoSurname={this.props.profileInfoSurname}
          />
        </Grid>
      </Grid>
    );
  }
}
