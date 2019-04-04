import React from 'react';
import { AppBar, IconButton, Menu, MenuItem, Tab, Tabs, NoSsr, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle'
import style from './Header.module.scss';
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';




const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});

class Header extends React.Component {
    state = {
        anchorEl: null,
        value: 0,
    }
    shouldComponentUpdate(nextProps) {
        return (this.props.logged !== nextProps.logged)
    }

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleChange = (event, value) => {
        console.log(value)
        console.log(this.state.value)
        this.setState({ value });
    };

    check = () => {
        alert("działa")
    }

    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const { value } = this.state;
        const open = Boolean(anchorEl);
        return (
            <div>
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
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>


                    <IconButton
                        aria-owns={open ? 'menu-appbar' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.check}>Profile</MenuItem>
                        <MenuItem onClick={this.check}>My account</MenuItem>
                    </Menu>
                </AppBar>
            </div>
        );

    }
}

Header.propTypes = {
    handleOnClick: PropTypes.func,
    logged: PropTypes.bool
}

export default withStyles(styles)(Header)
