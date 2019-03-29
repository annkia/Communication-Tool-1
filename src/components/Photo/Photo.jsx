import React from 'react';
import {Paper} from '@material-ui/core';
import styles from '../App/App.module.scss'; 


let image = require('../App/janedoe.jpg');

const style={
    Paper: { 

        marginTop:10,
        marginBottom:10,
        height: 350,
             
    },
    Image:{
    margin: 'auto',
    marginTop:20,
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
    }
}

export class Photo extends React.Component{
    render(){
        return(
                <Paper  style={style.Paper} className={styles.Photo}>
                {this.props.profilePhoto}
                
                <img src={image} alt="jane" style={style.Image}></img>

</Paper>
  
     
        );
        
      }
}
