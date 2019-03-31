import React from 'react';
import Avatar from '@material-ui/core/Avatar';

let image = require('../App/janedoe.jpg');

const style = {
  
    Image: {
        margin: 'auto',
        marginTop: 20,
        display: 'block',
        width: 250,
        height: 250,
    }
}

export class Photo extends React.Component {
    render() {
        return (
            <Avatar alt="Jane Doe" src={image}  style={style.Image} />
        );

    }
}
