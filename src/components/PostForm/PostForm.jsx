import React, { PureComponent } from "react";
import style from "./PostForm.module.scss";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField
} from "@material-ui/core";
import Axios from "./../../http/dataBase/posts";

class PostForm extends PureComponent {
  state = {
    idPostToEdit: this.props.idPost || null,
    post: {
      text: "",
      title: ""
    },
    selectedFile: ""
  };
  handleOnSubmit = event => {
    event.preventDefault();
  };

  handleSelectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  handleOnChange = event => {
    this.setState({
      post: {
        ...this.state.post,
        [event.target.id]: event.target.value
      }
    });
  };

  handleSendToServer = () => {
    const { text, title } = this.state.post;
    let communicateForUser = "";
    if (10 > title.length || title.length > 150) {
      communicateForUser +=
        "Title can contain between 10 and 150 characters.\n";
    }
    if (text.length > 1000) {
      communicateForUser += "Post's content can contain max 1000 characters.\n";
    }
    if (!this.state.selectedFile) {
      communicateForUser += "Post must have a photo.";
    }
    if (communicateForUser.length) {
      alert(communicateForUser);
      console.log(title.length, text.length);
      return;
    }
    alert("All right!");
  };

  render() {
    const { idPostToEdit } = this.state;
    return (
      <div className={style.postForm}>
        <Card>
          <Typography align="center" gutterBottom component="h2" variant="h6">
            {idPostToEdit ? "edit post" : "create new post"}
          </Typography>
          <form onSubmit={this.handleOnSubmit}>
            <TextField
              id="title"
              label="Post's title"
              className={style.textForm}
              placeholder="Type here post's title..."
              helperText="Title have to contain minimum 10 characters but maximum 150."
              fullWidth
              required
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              onChange={this.handleOnChange}
              value={this.state.post.title}
              variant="outlined"
            />
            <TextField
              id="text"
              label="Text content of the post"
              className={style.textForm}
              placeholder="Type here content of your post."
              helperText="Content can contain maximum 1000 characters."
              fullWidth
              required
              multiline
              rows={5}
              variant="outlined"
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              onChange={this.handleOnChange}
              value={this.state.post.text}
            />
            <label htmlFor="fileInput" className={style.textForm}>
              <span className={style.button}>Add photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={this.handleSelectedFile}
                id="fileInput"
                style={{ display: "none" }}
              />
            </label>
          </form>

          <Button onClick={this.handleSendToServer}>Save</Button>
        </Card>
      </div>
    );
  }
}

export default PostForm;
