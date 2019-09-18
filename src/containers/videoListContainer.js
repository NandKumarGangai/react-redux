import { connect } from "react-redux";
import VideoList from "../components/videoList";
import { selectVideo, getNextPageVideos } from "../actions/actions";

const mapStateToProps = (state) => ({
  videos: state.items
});
const mapDispatchToProps = dispatch => ({
  selectVideo: currentVideo => dispatch(selectVideo(currentVideo)),
  getNextPageVideos: nextPageToken => dispatch(getNextPageVideos(nextPageToken))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);
