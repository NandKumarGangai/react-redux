import React, { Component } from 'react';
import SearchBar from './components/searchBar';
import Header from './components/header';
import VideoList from "./containers/videoListContainer";
import VideoPlayer from './containers/videoPlayerContainer';
import './App.css';

class App extends Component {
  
  render() {
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
    );
  }
}

export default App;
