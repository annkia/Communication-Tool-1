import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './Buttonspanel.module.scss';


export class Buttonspanel extends React.Component{
    render(){
        return(
            <div className={styles.Buttonspanel}>
            <Button variant="contained" className={styles.EditButton} >
            Edit profile</Button>
            <Button variant="contained" className={styles.DeleteButton} >
            Delete profile</Button>
          </div>
        );
        
      }
}
