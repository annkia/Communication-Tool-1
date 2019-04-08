import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './Buttonspanel.module.scss';
//import Dialog from '@material-ui/core/Dialog';
//import DialogActions from '@material-ui/core/DialogActions';
//import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
//import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteProfilePopUp from '../DeleteProfilePopUp/DeleteProfilePopUp';

export default class Buttonspanel extends React.Component {
  state = {
        activePopup: false
      };
      
  handleTogglePopup = () => { //metoda otwiernaia popup
    if (!this.state.activePopup) {
      document.getElementById("root").style.filter = "blur(2px)";
    } else {
      document.getElementById("root").style.filter = "blur(0)";
    }
    this.setState(prevState => ({
      activePopup: !prevState.activePopup
    }));
  };
  render() {
    const { activePopup } = this.state;

    return (
    <>
      <div className={styles.Buttonspanel}>
        <Button variant="contained" className={styles.EditButton}>Edit profile</Button>
        <Button variant="contained" className={styles.DeleteButton} onClick={this.handleTogglePopup}>Delete profile</Button>
      </div>
      {activePopup ? (
        <DeleteProfilePopUp //tu dodać swojego deleteprofilepopup
          onClose={this.handleTogglePopup}
          open={activePopup}
          // postTitle={Title}
          // postContent={Text}
          // postImage={ThumbnailPhoto}
          // postPublishDate={PublishDate}
        />
      ) : null}

    </>
    );
  }
}


