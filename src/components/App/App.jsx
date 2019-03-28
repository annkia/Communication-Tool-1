import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";


import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';
import { Maincontent } from '../Maincontent/Maincontent.jsx';
import { Buttonspanel } from '../Buttonspanel/Buttonspanel.jsx';

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
      
      <div style={{minHeight: "100vh"}}>

        <Header></Header>

        {/* <p className={style.App}>Siemano</p>
        <Route to="" component="" /> */}
      <Maincontent profilePhoto={this.state.image} profileInfoName={this.state.person.name} 
      profileInfoSurname={this.state.person.surname}></Maincontent>
      <Buttonspanel></Buttonspanel>
      <Footer></Footer>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
