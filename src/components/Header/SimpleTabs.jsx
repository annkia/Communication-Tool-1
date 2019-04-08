import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Menu, MenuItem, Tab, Tabs, Typography, InputBase, Switch } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle'
import SearchIcon from '@material-ui/icons/Search'
import Avatar from '@material-ui/core/Avatar';
import { fade } from '@material-ui/core/styles/colorManipulator'
import style from './SimpleTabs.module.scss'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import MoreVertIcon from '@material-ui/icons/MoreVert';

import AvatarPhoto from '../../assets/janedoe.jpg';

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

const ITEM_HEIGHT = 48;

const styles = theme => ({
  root: {
    flexDirection: "row",
    // flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
  },
  typography: {
    fontFamily: "'Oleo Script', cursive",
    fontWeight: 'bold'
  },
  tab: {
    fontFamily: "'Oleo Script'",
    textTransform: 'lowercase',
    fontSize: '25px'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  avatar: {
    margin: 10,
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
    anchorEl: null
  };

  handleChange = (event, value) => {
    // <Redirect push to="/profilePage" />
    this.setState({ value });
    // console.log(this.state.value)
    // if (this.state.value == 1) {
    //   console.log("przechodzi if")
    //   return <Redirect push to="/profilePage" />
    // }
  };

  // redirectTo = () => {
  //   switch (this.state.value) {
  //     case 0:
  //       <Redirect to="/dashboard" />
  //       break;
  //     case 1:
  //       <Redirect to="/profilePage" />
  //       break;
  //     default:

  //   }
  // }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };



  render() {
    const { classes, person } = this.props;
    const { value, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    // console.log(this.props)

    return (
      <AppBar position="sticky" className={`${style.appBar} ${classes.root} `}>
        <Typography variant="h4" color="inherit" className={`${style.textLogo} ${classes.typography}`}>
          Dream Communicator
        </Typography>
        <div className={style.headerLinks}>
          <Link to="/profilePage" className={style.link} >#profile page</Link>
          <Link to="/dashboard" className={style.link}>#post list</Link>
          <p onClick={this.props.handleOnClick} className={style.link}>#log out</p>
        </div>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
        <div className={style.personalBar}>
          <Typography>
            {`Hi ${person.name}`}
          </Typography>
          <Avatar alt="Remy Sharp" src={AvatarPhoto} className={classes.avatar} />
        </div>
        <div className={style.mobileMenu}>
          <IconButton
            aria-label="More"
            aria-owns={open ? 'long-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={this.handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200,
              },
            }}
          >
            <MenuItem onClick={this.handleClose}>
              <Link to="/dashboard">#post list</Link>
            </MenuItem>
            <MenuItem selected="post list" onClick={this.handleClose}>
              <Link to="/profilePage">#profile page</Link>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <p onClick={this.props.handleOnClick}>#log out</p>
            </MenuItem>
            )}
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