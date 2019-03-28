import React, { Component } from "react";
import ShortPostElement from "./../ShortPostElement/ShortPostElement";

class PostsList extends Component {
  state = {
    posts: this.props.userPosts
  };
  render() {
    return (
      <ul>
        {this.state.posts.map(post => (
          <li>
            <ShortPostElement
              postTitle={post.postTitle}
              postContent={post.postContent}
              postImage={post.postImage}
              postPublishDate={post.postPublishDate}
            />
          </li>
        ))}
      </ul>
    );
  }
  componentDidMount() {
    console.log(this.props);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.posts.length !== prevProps.posts.length) {
      this.setState(this.props.posts);
    }
  }
}

export default PostsList;
