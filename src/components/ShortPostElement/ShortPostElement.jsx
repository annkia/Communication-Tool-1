import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./ShortPostElement.module.scss";
import buttonStyle from "./../FontAwesomeButton/FontAwesomeButton.module.scss";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography
} from "@material-ui/core/";
import PostModal from "./../PostModal/PostModal";
import FontAwesomeButton from "./../FontAwesomeButton/FontAwesomeButton";

const stylesMaterialUi = {
  media: {
    width: "100%",
    height: "100%"
  }
};

class ShortPostElement extends Component {
  state = {
    activePopup: false
  };

  handleTogglePopup = () => { //metoda otwiernaia popup
    if (!this.state.activePopup) {
      document.getElementById("root").style.filter = "blur(2px)";
    } else {
      document.getElementById("root").style.filter = "blur(0)";
    }
    this.setState(prevState => ({
      activePopup: !prevState.activePopup
    }));
  };

  viewFirst200CharactersFullWords = fullPost => { //sortowanie
    if (fullPost === undefined) return null;
    const indexOfLastSpace = fullPost.lastIndexOf(" ", 200);
    return `${fullPost.slice(0, indexOfLastSpace)}...`;
  };

  render() {
    const { classes, Title, Text, ThumbnailPhoto, PublishDate } = this.props;
    const { activePopup } = this.state;
    return (
      <>
        <Card className={style.shortPostElement}>
          <Grid
            container
            direction="row"
            alignItems="stretch"
            justify="flex-start"
            className={style.postGrid}
          >
            <Grid
              container
              direction="row"
              alignItems="stretch"
              justify="flex-start"
              className={style.postImage}
            >
              <CardMedia
                className={classes.media}
                component="img"
                src={ThumbnailPhoto}
                title="Photo"
              />
            </Grid>
            <Grid
              container
              direction="column"
              alignItems="stretch"
              justify="flex-start"
              className={style.postTextContent}
            >
              <Grid container justify="flex-end">
                <FontAwesomeButton
                  icon="edit"
                  colorButton={buttonStyle.green}
                  handleOnClick={() => alert("Edit button")}
                />
                <FontAwesomeButton
                  icon="trash"
                  colorButton={buttonStyle.red}
                  handleOnClick={() => alert("Delete button")}
                />
              </Grid>
              <CardContent>
                <Typography //tytuł postu po kliknięciu metoda
                  align="left"
                  gutterBottom
                  component="h2"
                  variant="title"
                  className={style.postTitle}
                  onClick={this.handleTogglePopup}
                >
                  {Title} 
                </Typography>
                <Typography component="p" variant="body1">
                  {this.viewFirst200CharactersFullWords(Text)}
                </Typography>
              </CardContent>
              <Typography
                align="right"
                gutterBottom
                component="p"
                variant="body1"
              >
                {PublishDate}
              </Typography>
            </Grid>
          </Grid>
        </Card>
        {activePopup ? (
          <PostModal
            onClose={this.handleTogglePopup}
            open={activePopup}
            postTitle={Title}
            postContent={Text}
            postImage={ThumbnailPhoto}
            postPublishDate={PublishDate}
          />
        ) : null}
      </>
    );
  }
}

ShortPostElement.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(stylesMaterialUi)(ShortPostElement);
