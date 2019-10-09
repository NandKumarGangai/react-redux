import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import VideoList from "../components/videoList";
import { selectVideo, getNextPageVideos } from "../actions/actions";

const mapStateToProps = ({ items }) => ({
  videos: items
});

// const mapDispatchToProps = dispatch => ({
//   selectVideo: currentVideo => dispatch(selectVideo(currentVideo)),
//   getNextPageVideos: nextPageToken => dispatch(getNextPageVideos(nextPageToken))
// });

const mapDispatchToProps = dispatch => bindActionCreators({
  selectVideo,
  getNextPageVideos
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);
