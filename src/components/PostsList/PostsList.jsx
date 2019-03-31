import React, { Component } from "react";
import style from "./PostsList.module.scss";
import ShortPostElement from "./../ShortPostElement/ShortPostElement";

class PostsList extends Component {
  state = {
    userPosts: this.props.userPosts
  };

  sortByPublishedDate = () => {
    const tempArray = [...this.state.userPosts];
    tempArray.sort((a, b) => b.PublishDate - a.PublishDate);
    return tempArray;
  };

  render() {
    const userPostsSorted = this.sortByPublishedDate();
    return (
      <ul className={style.postsList}>
        {userPostsSorted.length
          ? userPostsSorted.map(post => (
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
