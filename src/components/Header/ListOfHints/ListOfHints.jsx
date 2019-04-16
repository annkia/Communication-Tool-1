import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import style from "./ListOfHints.module.scss";

import Hint from "./Hint/Hint";

class ListOfHints extends React.Component {
  // state = {
  //   activePopup: false
  // };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutSide);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutSide);
  }

  handleClickOutSide = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      // this.props.handleCloseHintPopUp();
    }
  };

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

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

  render() {
    const { filteredPosts, activePopup, handleTogglePopup } = this.props;
    // const { activePopup } = this.state;

    return (
      <div ref={this.setWrapperRef}>
        <Card className={style.container}>
          {filteredPosts.map(post => (
            <Hint
              key={post.Id}
              post={post}
              activePopup={activePopup}
              handleTogglePopup={handleTogglePopup}
            />
          ))}
        </Card>
      </div>
    );
  }
}

ListOfHints.propTypes = {
  filteredPosts: PropTypes.array,
  onClose: PropTypes.func
};

export default ListOfHints;
