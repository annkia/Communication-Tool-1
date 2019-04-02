import React from 'react';
import { Maincontent } from '../Maincontent/Maincontent.jsx';
import Buttonspanel from '../Buttonspanel/Buttonspanel.jsx';
import AvatarPhoto from '../../assets/janedoe.jpg';

export default class Header extends React.Component {
  state = {
    person: {
      name: "",
      surname: ""
    },
    image: AvatarPhoto
  }
  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <Maincontent
          profilePhoto={this.state.image}
          profileInfoName={this.props.person.name}
          profileInfoSurname={this.props.person.surname}
        />
        <Buttonspanel />
      </React.Fragment>
    );
  }
}
