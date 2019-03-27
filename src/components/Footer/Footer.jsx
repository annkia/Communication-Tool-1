import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


export class Footer extends React.Component{
    render(){
        return(
            <AppBar position="static">
             <Toolbar>
                <Typography color="inherit">
                
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>                </Typography>
            </Toolbar>
        </AppBar>
        );
        
      }
}

