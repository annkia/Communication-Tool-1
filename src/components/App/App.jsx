import React, { Component } from "react";
//import { BrowserRouter, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
//import style from "./App.module.scss";

import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';
import { Maincontent } from '../Maincontent/Maincontent.jsx';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Jane',
        surname: 'Doe',
      },
      image: ""
  
      }
      
    };
  render() {
    return (
      <BrowserRouter>
      <Header></Header>
        {/* <p className={style.App}>Siemano</p>
        <Route to="" component="" /> */}
      <Maincontent profilePhoto={this.state.image} profileInfoName={this.state.person.name} 
      profileInfoSurname={this.state.person.surname}></Maincontent>

      <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
