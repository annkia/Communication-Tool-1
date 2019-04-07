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
    text: "",
    title: "",
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
      [event.target.id]: event.target.value
    });
  };

  handleSendToServer = () => {
    const formData = new FormData();
    formData.append("photo", this.state.selectedFile);
    const post = {
      title: this.state.title,
      text: this.state.text
    };
    formData.append("post", JSON.stringify(post));
    Axios.createPost(formData)
      .then(Axios.getPosts())
      .then(response => console.log(response));
  };

  render() {
    const { idPostToEdit } = this.state;
    return (
      <div className={style.postForm}>
        <Card>
          <Typography align="center" gutterBottom component="h2" variant="h6">
            {idPostToEdit ? "edit post" : "create post"}
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
              value={this.state.title}
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
              value={this.state.text}
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
