import React from 'react';
import { AppBar } from '@material-ui/core';
import style from './Header.module.scss';
import { Link } from 'react-router-dom'

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
            <div className={style.WholeHeader}>
              <h2 className={style.Logo}>Dream Communicator</h2>
                <Link to="/profilePage" className={style.HeaderLinks} >#profile page</Link>
                <Link to="/dashboard" className={style.HeaderLinks}>#post list</Link>
                <p  onClick={this.props.handleOnClick} className={style.LogoutButton}>#log out</p>
            </div> 
            </AppBar>
        );

    }
}
