import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import style from "./App.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEdit,
  faTrash,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";
import FontAwesomeButton from "../FontAwesomeButton/FontAwesomeButton";

library.add(faTrash, faEdit, faExclamationTriangle);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <FontAwesomeButton
          handleOnClick={() => alert("Button has been clicked!")}
          icon={"edit"}
        />
      </BrowserRouter>
    );
  }
}

export default App;
