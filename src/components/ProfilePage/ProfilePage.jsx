import React from 'react';
import { Maincontent } from '../Maincontent/Maincontent.jsx';
import { Buttonspanel } from '../Buttonspanel/Buttonspanel.jsx';
import AvatarPhoto from '../../assets/janedoe.jpg';
import userApi from '../../http/user'

export default class Header extends React.Component {
  state = {
    person: {
      name: "",
      surname: ""
    },
    image: AvatarPhoto
  }


  // componentDidMount() {
  //   this.getUser()
  // }

  // getUser = async () => {
  //   console.log("state", this.state.person)
  //   const user = await userApi.getInfoAboutUser()
  //   this.setState(() => {
  //     return {
  //       person: {
  //         name: user.GivenName,
  //         surname: user.Name
  //       }
  //     }
  //   })
  //   console.log("state", this.state.person)
  //   console.log("z api leci ", user.GivenName)
  // }

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
