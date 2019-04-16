import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import style from "./Hint.module.scss";
import CardActionArea from "@material-ui/core/CardActionArea";
import PostModal from "../../../PostModal/PostModal";

const styles = theme => ({
  root: {
    display: "flex",
    paddingTop: 5,
    paddingBottom: 5,
    "&:hover": {
      backgroundColor: "lightGray"
    }
  },
  rootTypography: {
    fontWeight: "bold",
    fontSize: 14,
    [theme.breakpoints.up("sm")]: {
      fontSize: 22
    }
  }
});

class Hint extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.activePopup !== nextProps.activePopup;
  }
  // state = {
  //   activePopup: false
  // };

  // handleTogglePopup = () => {
  //   if (!this.state.activePopup) {
  //     document.getElementById("root").style.filter = "blur(2px)";
  //   } else {
  //     document.getElementById("root").style.filter = "blur(0)";
  //   }
  //   this.setState(() => {
  //     return {
  //       activePopup: !this.state.activePopup
  //     };
  //   });
  // };

  cos = () => {
    this.props.handleTogglePopup();
    // if (!this.props.activePopup) {
    //   document.getElementById("root").style.filter = "blur(2px)";
    // } else {
    //   document.getElementById("root").style.filter = "blur(0)";
    // }
  };

  render() {
    const { classes, post, activePopup, handleTogglePopup } = this.props;
    // const { activePopup } = this.state;
    console.log("z podpowiedzi", this.props);

    return (
      <CardActionArea
        className={`${style.hint} ${classes.root}`}
        onClick={this.cos}
      >
        <div className={style.title}>
          <div className={style.titleLabel}>
            <Typography variant="caption">Title</Typography>
          </div>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.rootTypography}
          >
            {post.Title}
          </Typography>
        </div>
        <div className={style.text}>
          <Typography component="p">{post.Text}</Typography>
        </div>
        {activePopup ? (
          <PostModal
            onClose={this.cos}
            open={activePopup}
            postTitle={post.Title}
            postContent={post.Text}
            postImage={post.ThumbnailPhoto}
            postPublishDate={post.PublishDate}
          />
        ) : null}
      </CardActionArea>
    );
  }
}

Hint.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object,
  activePopup: PropTypes.bool,
  handleTogglePopup: PropTypes.func
};

export default withStyles(styles)(Hint);
