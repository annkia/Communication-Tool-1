import React from 'react';
import styles from './ProfileInfo.module.scss';

export class Profileinfo extends React.Component {
  render() {
    return (
        <h3 className={styles.ProfileInfo}> {this.props.profileInfoName} {this.props.profileInfoSurname} </h3>
    );

  }
}
