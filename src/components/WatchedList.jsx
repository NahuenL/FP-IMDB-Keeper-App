import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Movie from "./Movie";
import Message from "./Message";
import Empty from "./Empty";

const WatchedList = (props) => {
  const { watchedMovies } = props;

  return (
    <>
      <div className="root">
        <Message infoText="Movies Watched" />
        <Grid container spacing={3} justify="center">
          {!watchedMovies.length ? (
            <Empty />
          ) : (
            watchedMovies.map((movie) => (
              <Movie key={movie.data.id} data={movie.data} />
            ))
          )}
        </Grid>
      </div>
    </>
  );
};

WatchedList.propTypes = {
  watchedMovies: propTypes.object,
};


const mapStateToPros = (state) => {
  return {
    watchedMovies: state.watchedMovies,
  };
};

export default connect(mapStateToPros, null)(WatchedList);
