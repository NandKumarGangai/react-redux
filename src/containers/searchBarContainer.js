import SearchBar from "../components/searchBar";
import { connect } from "react-redux";
import { searchQuery } from "../actions/actions";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  searchQuery: (query)=>dispatch(searchQuery(query))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
