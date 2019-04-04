import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Menu, MenuItem, Tab, Tabs, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle'
import style from './SimpleTabs.module.scss'

// function TabContainer(props) {
//   return (
//     <Typography component="div" style={{ padding: 8 * 3 }}>
//       {props.children}
//     </Typography>
//   );
// }

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired,
// };

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  typography: {
    fontFamily: "'Oleo Script', cursive",
    fontWeight: 'bold'
  },
  tab: {
    fontFamily: "'Oleo Script'",
    textTransform: 'lowercase',
    fontSize: '25px'
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
    anchorEl: null
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };



  render() {
    const { classes } = this.props;
    const { value, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    console.log(this.props)

    return (
      <AppBar position="static">
        <Typography variant="h4" color="inherit" className={classes.typography}>
          Dream Communicator
        </Typography>
        <Tabs value={value} onChange={this.handleChange} centered>
          <Tab label="#post list" className={classes.tab} />
          <Tab label="#profile page" className={classes.tab} />
        </Tabs>
        <div>
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
            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
          </Menu>
        </div>

      </AppBar>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);