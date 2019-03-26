import React from "react";
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
import "typeface-roboto";

const stylesMaterialUi = {
  media: {
    width: "100%",
    height: "100%"
  }
};

const ShortPostElement = props => {
  const viewFirst200CharactersFullWords = fullPost => {
    if (fullPost === undefined) return null;
    const indexOfLastSpace = fullPost.lastIndexOf(" ", 200);
    return `${fullPost.slice(0, indexOfLastSpace)}...`;
  };

  const convertPublishDate = postPublishDate => {
    if (postPublishDate === undefined) return null;
    const [year, month, day] = [...postPublishDate.split("-", 3)];
    return `Post published in ${day.slice(0, 2)}-${month}-${year}.`;
  };

  const { classes, postTitle, postContent, postImage, postPublishDate } = props;
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
              {"Hello World!"}
            </Grid>
            <CardContent>
              <Typography
                align={"left"}
                gutterBottom
                component={"h2"}
                variant={"subtitle2"}
              >
                {postTitle}
              </Typography>
              <Typography component={"p"} variant={"body1"}>
                {viewFirst200CharactersFullWords(postContent)}
              </Typography>
            </CardContent>
            <Typography
              align={"right"}
              gutterBottom
              component={"p"}
              variant={"body1"}
            >
              {convertPublishDate(postPublishDate)}
            </Typography>
            {/*<Grid container justify={"flex-end"}>*/}
            {/*{convertPublishDate(postPublishDate)}*/}
            {/*</Grid>*/}
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

ShortPostElement.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(stylesMaterialUi)(ShortPostElement);
