import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


const style={
    Paper: { 
             marginTop:20,
             marginBottom:10,
             height: 350
             
           //  width: 500
    }
}
export class Profileinfo extends React.Component{
    render(){
        return(
            <Paper  style={style.Paper}>
                        <Typography component="h2" variant="display3" gutterBottom>
              {this.props.profileInfoName}        </Typography>
                        
                        <Typography component="h2" variant="display" gutterBottom>
              {this.props.profileInfoSurname}  
              </Typography>    
                            
                </Paper>
                
     
        );
        
      }
}
