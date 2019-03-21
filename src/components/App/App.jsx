import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import style from "./App.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import DeleteButton from "../DeleteButton/DeleteButton";

library.add(faTrash);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <DeleteButton handleOnClick={() => alert("Button has been clicked!")}/>
      </BrowserRouter>
    );
  }
}

export default App;
