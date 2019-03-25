import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


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

            <TextField
                    disabled
                      id="outlined-disabled"
                      label="Name"
                      defaultValue={this.props.profileInfoName}
                      margin="normal"
                      variant="outlined"
                     />
            <TextField
                        disabled
                        id="outlined-disabled"
                        label="Surname"
                        defaultValue={this.props.profileInfoSurname}
                        margin="normal"
                        variant="outlined"
                        />         


               
                </Paper>
                
     
        );
        
      }
}
