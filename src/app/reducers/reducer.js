import {
  REQUEST_ITEMS,
  RECEIVE_ITEMS,
  SELECT_VIDEO,
  NEXT_PAGE_VIDEOS
} from "../constants/consts";

export function items(state = [], action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return [action.videos];    

    case NEXT_PAGE_VIDEOS:
      console.log('state', state);
      console.log('next', action.videos);
      return [...state, action.videos]
    default:
      return state;
  }
}

export function videoToPlay(state = {}, action) {
  switch (action.type) {
    case SELECT_VIDEO:
      return {...action.currentVideo, ...action.videoId};

    default:
      return state;
  }
}

export function requestStatus(state = [], action){
  switch(action.type) {
    case REQUEST_ITEMS:
      return action.requestStatus;
    
    default:
      return state
  }
}