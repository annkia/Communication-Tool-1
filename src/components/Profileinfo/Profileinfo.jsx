import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import styles from './ProfileInfo.module.scss';


const style = {
  Paper: {
    marginTop: 20,
    marginBottom: 10,
    height: 350

    //  width: 500
  }
}
export class Profileinfo extends React.Component {
  render() {
    return (

        <h3 className={styles.ProfileInfo}> {this.props.profileInfoName} {this.props.profileInfoSurname} </h3>


    );

  }
}
