import React from "react";
import { searchQuery } from "../actions/actions";
import { connect } from "react-redux";
const SearchBar = ({ dispatch }) => {
  let input;
  return (
    <>
      <div className="row searchbar">
        <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 text-center">
          <form
            className=""
            onSubmit={e => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              dispatch(searchQuery(input.value));
            }}
          >
            <div className="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for..."
                  // value="angular 6 tutorial"
                  ref={node => (input = node)}
                />
                <span className="input-group-btn">
                  <input
                    type="submit"
                    className="btn btn-default"
                    value="GO!"
                  />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default connect()(SearchBar);
