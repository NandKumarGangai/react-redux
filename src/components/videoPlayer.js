import React from "react";

const VideoPlayer = ({ video }) => {
  console.log(video);
  if (video.videoId === undefined) {
    return (
      <div>
        <p>Search and select video to play...</p>
      </div>
    );
  }

  let { videoId, snippet } = video;

  let src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  return (
    <div>
      <div className='videoPlayer embed-responsive embed-responsive-16by9'>
        <iframe
          className='embed-responsive-item'
          src={videoId === null ? "" : src}
          title={videoId}
        />
      </div>
      <div className='page-header'>
        <h4> {snippet["title"]}</h4>
        <hr />
        <h5> {snippet["channelTitle"]}</h5>
        <p>Published on {snippet["publishedAt"]}</p>
        <p> {snippet["description"]} </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
