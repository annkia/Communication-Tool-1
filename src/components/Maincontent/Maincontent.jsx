import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Photo } from '../Photo/Photo.jsx';
import { Profileinfo } from '../Profileinfo/Profileinfo.jsx';




export class Maincontent extends React.Component{
    render(){
        console.log(this.props.profilePhoto)
        return(
            <Grid container >
                <Grid item sm={6}>
                <Photo  profilePhoto={this.props.profilePhoto}></Photo>
                
                </Grid >
                <Grid item sm={6}>
                <Profileinfo profileInfoName={this.props.profileInfoName}
                    profileInfoSurname={this.props.profileInfoSurname}></Profileinfo>
                </Grid >
                
            </Grid>
     
        );
        
      }
}