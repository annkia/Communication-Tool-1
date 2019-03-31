import React from 'react';
import Paper from '@material-ui/core/Paper';
 import Tabs from '@material-ui/core/Tabs';
 import Tab from '@material-ui/core/Tab';
 import Button from '@material-ui/core/Button';
 import styles from './Buttonspanel.module.scss';


export class Buttonspanel extends React.Component{
    render(){
        return(
            // <Paper>
            //     <Tabs variant="fullWidth" >
            //       <Tab label="Edit profile" />
            //      <Tab label="Delete profile" />
            //   </Tabs>
            // </Paper>
            <div className={styles.Buttonspanel}>
            <Button variant="contained" className={styles.EditButton} >
            Edit profile</Button>
            <Button variant="contained" className={styles.DeleteButton} >
            Delete profile</Button>
          </div>
        );
        
      }
}
