import React from "react";
import VideoCard from "./videoCard";

const VideoList = ({ videos, selectVideo, getNextPageVideos }) => {
  if (videos.length > 0) {
    let AllVideos = [];
    let nextPageToken;  
    videos.forEach((video, index) => {
      AllVideos = AllVideos.concat(video["items"]);
      nextPageToken = video['nextPageToken'];
    });

    let videoItem = AllVideos.map((item, index) => (
      <VideoCard key={index} item={item} selectVideo={selectVideo} />
    ));

    return (
      <div>
        <ul className="list-group">{videoItem}</ul>
        <button className="btn btn-default" onClick={()=>getNextPageVideos(nextPageToken)}>Load more....</button>
      </div>
    );
  }

  return (
    <>
      <p>No videos found...</p>
    </>
  );
};

export default VideoList;
