import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import styles from '../App/App.module.scss'; 


export class Footer extends React.Component{
    render(){
        return(
            <AppBar position="static">            
             <Toolbar className={styles.FooterToolbar3}>

                <Typography  color="inherit" >
                &copy; {new Date().getFullYear()} Copyright: DreamTeam            </Typography>
            </Toolbar>
        </AppBar>
        );
        
      }
}

