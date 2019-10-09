import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { searchQuery } from "../actions/actions";
import SearchBar from "../components/searchBar";

const mapStateToProps = () => ({});

// const mapDispatchToProps = dispatch => ({
//   searchQuery: (query) => dispatch(searchQuery(query))
// });

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    searchQuery
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
