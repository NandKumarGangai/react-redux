import { RECEIVE_ITEMS, API_KEY, SELECT_VIDEO, REQUEST_ITEMS, NEXT_PAGE_VIDEOS } from "../constants/consts";
import axios from "axios";

function requestVideos(requestStatus){
  return {
    type: REQUEST_ITEMS,
    requestStatus
  }
}

function receiveVideos(videos) {
  return {
    type: RECEIVE_ITEMS,
    videos,
  };
}

export function searchQuery(query) {
  const BASE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&&type=video&q=${query}&maxResults=12&relevanceLanguage=en&regionCode=in&key=${API_KEY}`;
  return dispatch => {
    dispatch(requestVideos(true))
    axios
      .get(BASE_URL)
      .then(res => {
        let currentVideo = {snippet: res.data.items["0"].snippet, videoId: res.data.items["0"].id.videoId}
        dispatch(setVideo(currentVideo));
        dispatch(receiveVideos(res.data));
        
      })
      .then(err => console.log(err));
  };
}

function setVideo(currentVideo){
  return {
    type: SELECT_VIDEO,
    currentVideo
  };
}

export function selectVideo(currentVideo) {

  return {
    type: SELECT_VIDEO,
    currentVideo
  };
}

function nextPageVideos(videos){
  console.log('videos', videos);
  return {
    type: NEXT_PAGE_VIDEOS,
    videos
  }
}
export function getNextPageVideos(nextPageToken){
  const BASE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&&type=video&pageToken=${nextPageToken}&maxResults=12&relevanceLanguage=en&regionCode=in&key=${API_KEY}`;

  return dispatch => {
    axios.get(BASE_URL)
      .then(res => dispatch(nextPageVideos(res.data)))
      .catch(err=> {if(err) throw err})
  }
}

