import { ADD_POST, ADD_POSTS, EDIT_POST, REMOVE_POST } from "../actions/postActions";

const initState = {
  userPosts: []
};

export const postReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        userPosts: [...state.userPosts, action.payload]
      };
    case ADD_POSTS:
      return {
        userPosts: [...action.payload]
      };
    case REMOVE_POST:
      return {
        userPosts: [...state.userPosts.filter(post => post.Id !== action.payload)]
      };
    case EDIT_POST:
      return {
        userPosts: [...state.userPosts.map(post =>
          post.Id === action.payload.Id ? action.payload : post
        )]
      };
    default:
      return state;
  }
};
