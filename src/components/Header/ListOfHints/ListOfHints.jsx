import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import style from "./ListOfHints.module.scss";

import Hint from "./Hint/Hint";

class ListOfHints extends React.Component {
  componentDidMount() {
    window.addEventListener("mouseup", this.handleClickOutSide);
  }
  componentWillUnmount() {
    window.removeEventListener("mouseup", this.handleClickOutSide);
  }

  handleClickOutSide = event => {
    const listOfHints = document.getElementById("listOfHints");
    const hint = document.getElementsByClassName(
      "MuiButtonBase-root-120 MuiCardActionArea-root-248 Hint_hint__1x7mT Hint-root-246"
    );
    console.log("event", event.target);
    if (event.target !== listOfHints && event.target.parentNode !== hint) {
      // this.props.onClose();
    }
  };

  render() {
    const { filteredPosts } = this.props;

    return (
      <Card className={style.container}>
        {filteredPosts.map(post => (
          <Hint key={post.Id} post={post} />
        ))}
      </Card>
    );
  }
}

ListOfHints.propTypes = {
  classes: PropTypes.object.isRequired,
  filteredPosts: PropTypes.string,
  onClose: PropTypes.func
};

export default ListOfHints;
