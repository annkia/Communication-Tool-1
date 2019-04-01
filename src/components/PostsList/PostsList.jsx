import React, { Component } from "react";
import style from './PostsList.module.scss';
import ShortPostElement from "./../ShortPostElement/ShortPostElement";

class PostsList extends Component {
  state = {
    posts: this.props.userPosts,
  };

  render() {
    return (
      <ul className={style.postsList}>
        {this.state.posts.length > 0 ?
          this.state.posts.map(post => (
            <li key={post.id}>
              <ShortPostElement
                postTitle={post.postTitle}
                postContent={post.postContent}
                postImage={post.postImage}
                postPublishDate={post.postPublishDate}
              />
            </li>
          )) :
          "You have not any post on your profile. We wait for your activity!"}
      </ul>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userPosts.length !== this.props.userPosts.length) {
      this.setState(prevState => ({
        posts: this.props.userPosts,
      }))
    }
  }
}

export default PostsList;
