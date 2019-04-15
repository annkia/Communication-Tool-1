import React from 'react';
import { Maincontent } from '../Maincontent/Maincontent.jsx';
import Buttonspanel from '../Buttonspanel/Buttonspanel.jsx';
import AvatarPhoto from '../../assets/janedoe.jpg';
import { connect } from 'react-redux';
import { profileReducer } from '../../reducers/deleteProfileReducer.js';

class ProfilePage extends React.Component {
  state = {
    person: {
      name: "",
      surname: ""
    },
    image: AvatarPhoto
  }
  render() {
    const { Photo, GivenName, Name} = this.props.userProfile;
    return (
      <React.Fragment>
        <Maincontent
          profilePhoto={Photo}
          profileInfoName={Name}
          profileInfoSurname={GivenName}
        />
        <Buttonspanel  clearSession={this.props.clearSession}/>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state)=> ({
  userProfile: state.profileReducer
})
export default connect(mapStateToProps, null)(ProfilePage);