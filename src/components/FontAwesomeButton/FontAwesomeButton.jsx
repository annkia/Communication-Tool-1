import React from "react";
import style from "./FontAwesomeButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FontAwesomeButton = props => {
  const colorForAnimation = () => {
    switch (props.icon) {
      case "trash":
        return style.red;
      case "edit":
        return style.green;
      case "window-close":
        return style.black;
      default:
        return style.yellow;
    }
  };

  return (
    <button
      className={`${style.awesomeButton} ${colorForAnimation()}`}
      onClick={props.handleOnClick || (() => alert("Oops! Some goes wrong!"))}
    >
      <FontAwesomeIcon icon={props.icon || "exclamation-triangle"} />
    </button>
  );
};

export default FontAwesomeButton;
