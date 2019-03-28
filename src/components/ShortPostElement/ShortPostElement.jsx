import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./ShortPostElement.module.scss";
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

  handleTogglePopup = () => {
    if (!this.state.activePopup) {
      document.getElementById("root").style.filter = "blur(2px)";
    } else {
      document.getElementById("root").style.filter = "blur(0)";
    }
    this.setState(prevState => ({
      activePopup: !prevState.activePopup
    }));
  };

  viewFirst200CharactersFullWords = fullPost => {
    if (fullPost === undefined) return null;
    const indexOfLastSpace = fullPost.lastIndexOf(" ", 200);
    return `${fullPost.slice(0, indexOfLastSpace)}...`;
  };

  convertPublishDate = postPublishDate => {
    if (postPublishDate === undefined) return null;
    const [year, month, day] = [...postPublishDate.split("-", 3)];
    return `Post published in ${day.slice(0, 2)}-${month}-${year}.`;
  };

  render() {
    const {
      classes,
      postTitle,
      postContent,
      postImage,
      postPublishDate
    } = this.props;

    const { activePopup } = this.state;
    return (
      <>
        <Card className={style.shortPostElement}>
          <Grid
            container
            direction={"row"}
            alignItems={"stretch"}
            justify={"flex-start"}
          >
            <Grid
              container
              direction={"row"}
              alignItems={"stretch"}
              justify={"flex-start"}
              className={style.postImage}
            >
              <CardMedia
                className={classes.media}
                image={postImage}
                title={"Photo"}
              />
            </Grid>
            <Grid
              container
              direction={"column"}
              alignItems={"stretch"}
              justify={"flex-start"}
              className={style.postTextContent}
            >
              <Grid container justify={"flex-end"}>
                <FontAwesomeButton
                  icon="edit"
                  handleOnClick={() => alert("Edit button")}
                />
                <FontAwesomeButton
                  icon="trash"
                  handleOnClick={() => alert("Delete button")}
                />
              </Grid>
              <CardContent>
                <Typography
                  align={"left"}
                  gutterBottom
                  component={"h2"}
                  variant={"title"}
                  className={style.postTitle}
                  onClick={this.handleTogglePopup}
                >
                  {postTitle}
                </Typography>
                <Typography component={"p"} variant={"body1"}>
                  {this.viewFirst200CharactersFullWords(postContent)}
                </Typography>
              </CardContent>
              <Typography
                align={"right"}
                gutterBottom
                component={"p"}
                variant={"body1"}
              >
                {this.convertPublishDate(postPublishDate)}
              </Typography>
            </Grid>
          </Grid>
        </Card>
        {activePopup ? (
          <PostModal
            onClose={this.handleTogglePopup}
            open={activePopup}
            postTitle={postTitle}
            postContent={postContent}
            postImage={postImage}
            postPublishDate={this.convertPublishDate(postPublishDate)}
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
