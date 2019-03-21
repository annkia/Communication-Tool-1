import React from "react";
import PropTypes from "prop-types";
import styles from "./ShortPostElement.module.scss";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography
} from "@material-ui/core/";
import "typeface-roboto";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";

const stylesMaterialUi = {
  media: {
    width: "100%",
    height: "100%"
  }
};

const ShortPostElement = props => {
  const viewFirst200CharactersFullWords = fullPost => {
    const indexOfLastSpace = fullPost.lastIndexOf(' ', 200);
    return fullPost.slice(0, indexOfLastSpace);
  };

  const convertPublishDate = postPublishDate => {
    const [year, month, day] = [...postPublishDate.split('-', 3)];
   return `Post created in ${day.slice(0, 2)}-${month}-${year}.`;
  };

  const { classes, postTitle, postContent, postImage, postPublishDate } = props;
  return (
    <div className={styles.reset}>
      <Card style={{ padding: "1%" }}>
        <Grid
          container
          direction={"column"}
          alignItems={"stretch"}
          justify={"space-around"}
          spacing={0}
        >
          <Grid container justify={"flex-end"}>
            <DeleteButton/>
            <EditButton/>
          </Grid>
          <Grid
            container
            direction={"row"}
            alignItems={"stretch"}
            justify={"flex-start"}
          >
            <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
              <CardMedia
                className={classes.media}
                image={postImage}
                title={"Photo"}
              />
            </Grid>
            <Grid item xs={6} sm={9} md={9} lg={9} xl={9}>
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
                  {viewFirst200CharactersFullWords(postContent) + '...'}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
          <Grid container justify={"flex-end"}>{convertPublishDate(postPublishDate)}</Grid>
        </Grid>
      </Card>
    </div>
  );
};

ShortPostElement.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(stylesMaterialUi)(ShortPostElement);
