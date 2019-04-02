import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import {
  Modal,
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia
} from "@material-ui/core";
import style from "./PostModal.module.scss";

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
    postTitle,
    postContent,
    postImage,
    postPublishDate,
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
          <button className={style.btn} onClick={onClose}> //button do zamykania
            <FontAwesomeIcon icon="window-close" />
          </button>
        </CardActions>
        <CardMedia //zdjecie - usunac
          className={style.modal_img}
          component="img"
          src={postImage}
        />
        <CardContent>
          <Grid //dotyczy contenntu
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
          >
          //zrobić form z dwoma gridami
          1. form checkbox, direction column
          2. form direction row
          space around odstep miedzy
            <Typography gutterBottom variant="h5" component="h2"> //tytuł
              {postTitle}
            </Typography>
            <Typography component="p">{postContent}</Typography> //treść
            <Grid container justify="flex-end">
              <Typography className={style.modal_publishDate} component="p"> //data
                {postPublishDate}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Modal>
  );
};

PostModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(stylesMaterialUi)(PostModal);
