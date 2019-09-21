import React from "react";
//import "../App.css";

const VideoCard = ({ item, selectVideo }) => {
  let { snippet, id } = item;
  let { thumbnails, title, channelTitle } = snippet;
  let { url } = thumbnails["default"];
  let { videoId } = id;
  let currentVideo = { videoId, snippet };
  return (
    <li className="contentBox list-group-item"  onClick={() => selectVideo(currentVideo)}>
      <div className="media">
        <div className="media-left">
          <img
            className="media-object thumbnail"
            src={url}
            alt="img"           
          />
        </div>
        <div className="media-body">
          <h4 className="media-heading">{title}</h4>
          <div className="">
            <p>{channelTitle}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoCard;
