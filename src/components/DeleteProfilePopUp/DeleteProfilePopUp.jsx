import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./DeleteProfilePopUp";
import withStyles from "@material-ui/core/styles/withStyles";
//import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';

import {
  Modal,
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent
} from "@material-ui/core";


const stylesMaterialUi = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});


//w butonie bwdzie meetoda handle onclick, delete potem przekierowanie
const PostModal = props => {
  const {
    classes,
    onClose,
    open
  } = props;
  return (
    <Modal
      className={style.modal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={onClose}
    >
      <Card className={`${classes.paper} ${style.modal_inner}`}>
        <CardActions>
          <button className={style.btn} onClick={onClose}>
            <FontAwesomeIcon icon="window-close" />
          </button>
        </CardActions>
        <CardContent>
          <Grid //dotyczy contenntu
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
          >
          {/* //zrobić form z dwoma gridami
          1. form checkbox, direction column
          2. form direction row
          space around odstep miedzy */}
            <Typography gutterBottom variant="h5" component="h2">
              Are you sure?
            </Typography>
            <Typography component="p">Deleting your account will remove all your posts!</Typography>
            <Button variant="contained" className={classes.button} onClick={onClose}>
              Delete
           </Button>
            <Button variant="contained" className={classes.button} onClick={onClose}>
              I'm staying
          </Button>
            <Grid container justify="flex-end">
              <Typography component="p">
                
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Modal>
  );
};

// PostModal.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(stylesMaterialUi)(PostModal);
