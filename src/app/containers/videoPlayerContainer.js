import { connect } from "react-redux";
import VideoPlayer from "../components/videoPlayer";

const mapStateToProps = state => ({
  video: state.videoToPlay
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer);
