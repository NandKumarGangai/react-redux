import React from 'react';
import SearchBar from './components/searchBar';
import Header from './components/header';
import VideoList from "./containers/videoListContainer";
import VideoPlayer from './containers/videoPlayerContainer';
import '../App.css';

export default () => {
  return (
    <div className="">
        <Header></Header>
        <SearchBar></SearchBar>
        <div className="row">
          <div className="col-md-7">
              <VideoPlayer></VideoPlayer>
          </div>
          <div className="col-md-5">              
              <VideoList></VideoList>
          </div>
        </div>
      </div>
  )
}
