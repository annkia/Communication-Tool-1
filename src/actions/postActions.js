import Axios from "./../http/dataBase/posts";

export const ADD_POST = "Add_Post";
export const FETCH_POSTS = "Fetch_Posts";
export const EDIT_POST = "Edit_Post";
export const REMOVE_POST = "Remove_Post";

export const addPost = ({ userPost, image }) => dispatch => {
  const formData = new FormData();
  formData.append("photo", image);
  formData.append("post", userPost);
  return Axios.createPost(formData)
    .then(response => {
      dispatch(addPostSuccess(response));
    })
    .catch(error => {
      throw error;
    });
};

const addPostSuccess = ({ Id, Title, Text, ThumbnailPhoto, PublishDate }) => ({
  type: ADD_POST,
  payload: {
    Id,
    Title,
    Text,
    ThumbnailPhoto,
    PublishDate
  }
});

export const fetchPosts = () => dispatch =>
  Axios.getPosts()
    .then(response => {
      dispatch(fetchPostsSuccess(response));
    })
    .catch(error => {
      throw error;
    });

const fetchPostsSuccess = postsArray => ({
  type: FETCH_POSTS,
  payload: postsArray
});

export const editPost = post => dispatch =>
  Axios.updatePost(post.Id, post).then(response => {
    dispatch(editPostSuccess(response));
  });

const editPostSuccess = ({ Id, Title, Text, ThumbnailPhoto }) => ({
  type: EDIT_POST,
  payload: {
    Id,
    Title,
    Text,
    ThumbnailPhoto
  }
});

export const removePost = id => dispatch =>
  Axios.deletePost(id)
    .then(response => {
      dispatch(removePostSuccess(id));
    })
    .catch(error => {
      throw error;
    });

const removePostSuccess = id => ({
  type: REMOVE_POST,
  payload: id
});