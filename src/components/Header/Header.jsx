import React from 'react';
import { AppBar } from '@material-ui/core';
import style from './Header.module.scss';
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

export default class Header extends React.Component {
    shouldComponentUpdate(nextProps) {
        return (this.props.logged !== nextProps.logged)
    }
    render() {
        return (
            <AppBar position="sticky" className={style.header}>
                <div className={style.WholeHeader}>
                    <h2 className={style.Logo}>Dream Communicator</h2>
                    {this.props.logged ?
                        <React.Fragment>
                            <Link to="/profilePage" className={style.HeaderLinks} >#profile page</Link>
                            <Link to="/dashboard" className={style.HeaderLinks}>#post list</Link>
                            <p onClick={this.props.handleOnClick} className={style.LogoutButton}>#log out</p>
                        </React.Fragment>
                        : null}
                </div>
            </AppBar>
        );

    }
}

Header.propTypes = {
    handleOnClick: PropTypes.func,
    logged: PropTypes.bool
}
