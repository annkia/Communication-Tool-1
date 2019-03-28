import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import styles from '../App/App.module.scss'; 


export class Header extends React.Component{
    render(){
        return(
            <AppBar position="static" >
                <h2 className={styles.Logo}>Dream Communicator</h2>

             <Toolbar  className={styles.FooterToolbar}>
                <Typography color="inherit">
                
                </Typography>
            </Toolbar>
        </AppBar>
        );
        
      }
}


