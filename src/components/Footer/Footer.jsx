
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export class Footer extends React.Component{
    render(){
        return(
            <Paper>
                <Tabs variant="fullWidth">
                  <Tab label="Edit profile" />
                 <Tab label="Delete profile" />
              </Tabs>
            </Paper>
     
        );
        
      }
}
