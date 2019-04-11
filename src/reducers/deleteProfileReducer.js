import {
    EDIT_PROFILE,
    REMOVE_PROFILE,
    FETCH_PROFILE
    
  } from "../actions/profileActions";

  const initState = {
    userProfile:{}
  };

  export const profileReducer = (state = initState, action) => {
    switch (action.type) {
      case EDIT_PROFILE:
        return {
          userProfile: { ...state.userProfile, 
            Name:action.Name,
            GivenName:action.GivenName,
            Photo: getPhoto(action) ? action.Photo : state.Photo
        }
        };
      case REMOVE_PROFILE:
        return {
          userPosts: null
        };
     case FETCH_PROFILE:
     return{
        userProfile: {
            ...state.userProfile,
            Name:action.Name,
            GivenName:action.GivenName,
            Photo:action.Photo
        }
     };

      default:
        return state;
    }
  };
  