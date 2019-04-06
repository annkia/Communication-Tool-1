export const ADD_POST = "Add_Post";
export const ADD_POSTS = "Add_Posts";
export const EDIT_POST = "Edit_Post";
export const REMOVE_POST = "Remove_Post";

export const addPost = ({Id, Title, Text, ThumbnailPhoto, PublishDate}) => ({
  type: ADD_POST,
  payload: {
    Id,
    Title,
    Text,
    ThumbnailPhoto,
    PublishDate,
  }
});

export const addPosts = postsArray => ({
  type: ADD_POSTS,
  payload: postsArray
});

export const editPost = ({Id, Title, Text, ThumbnailPhoto, PublishDate}) => ({
  type: EDIT_POST,
  payload: {
    Id,
    Title,
    Text,
    ThumbnailPhoto,
    PublishDate
  }
});

export const removePost = id => ({
  type: REMOVE_POST,
  payload: id
});
