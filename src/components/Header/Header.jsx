import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


export class Header extends React.Component{
    render(){
        return(
            <AppBar position="static">
             <Toolbar>
                <Typography color="inherit">
                <h1>Profile Page</h1>
                </Typography>
            </Toolbar>
        </AppBar>
        );
        
      }
}


