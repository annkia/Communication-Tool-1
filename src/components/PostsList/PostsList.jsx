import React, { Component } from "react";
import style from "./PostsList.module.scss";
import ShortPostElement from "./../ShortPostElement/ShortPostElement";

class PostsList extends Component {
  state = {
    userPosts: this.props.userPosts
  };

  get userPostsSorted() {
    if (this.state.userPosts.length > 2) {
      return [...this.state.userPosts].sort(
        (a, b) => b.PublishDate - a.PublishDate
      );
    } else {
      return this.state.userPosts.length ? [...this.state.userPosts] : [];
    }
  }

  render() {
    return (
      <ul className={style.postsList}>
        {this.userPostsSorted.length
          ? this.userPostsSorted.map(post => (
              <li key={post.Id}>
                <ShortPostElement
                  Title={post.Title}
                  Text={post.Text}
                  ThumbnailPhoto={post.ThumbnailPhoto}
                  PublishDate={`Post published on ${post.PublishDate.toLocaleDateString(
                    "en-GB"
                  )}`}
                />
              </li>
            ))
          : "You have not any post on your profile. We wait for your activity!"}
      </ul>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userPosts.length !== this.props.userPosts.length) {
      this.setState(prevState => ({
        userPosts: this.props.userPosts
      }));
    }
  }
}

export default PostsList;
