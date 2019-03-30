import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import style from './Header.module.scss';
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"





export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: this.props.auth
        }
    }

    render() {
        return (
            <AppBar position="static" className={style.header}>
                <div>
                    <h2 className={style.Logo}>Dream Communicator</h2>
                </div>
                <React.Fragment>
                    <Link to="/profilePage">Profile Page</Link>
                    <Link to="/dashboard">Home Page</Link>
                    <button onClick={this.props.handleOnClick}>Logout</button>
                </React.Fragment>


                <Toolbar className={style.FooterToolbar}>
                    <Typography color="inherit">

                    </Typography>
                </Toolbar>


            </AppBar>
        );

    }
}

// Header.PropTypes = {
//     handleOnClick: PropTypes.func
// }
