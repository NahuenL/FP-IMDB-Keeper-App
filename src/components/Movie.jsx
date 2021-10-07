import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { setWatched, deleteWatched } from "../actions";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import WatchedIcon from "@material-ui/icons/BeenhereTwoTone";

import "../assets/styles/components/Movie.scss";

const Movie = (props) => {
  const [watched, setWatched] = useState(false);
  const { data, watchedMovies } = props;
  const { id, title, year, image, imDbRating } = data;

  useEffect(() => {
    wasWatched();
  }, []);

  const handleSetWatched = () => {
    props.setWatched({ data });
    setWatched(true);
  };

  const handleDeleteWatched = (itemId) => {
    props.deleteWatched(itemId);
    setWatched(false);
  };

  const wasWatched = () => {
    const result = watchedMovies.filter(
      (watchedMovie) => watchedMovie.data.id === id
    );
    if (result.length) {
      setWatched(true);
    }
  };

  return (
    <Grid item xs={12} sm={2}>
      <Paper className="front-paper">
        <Link to={`/movie/details/${id}`}>
          <img className="movie--img" src={image} alt="Movie" />
        </Link>
        <div className="movie--details">
          <h2 className="movie--details-name">{title}</h2>
          <p className="movie--details-item">
            <span className="movie--details-item-type">Year:</span> {year}
          </p>
          <p className="movie--details-item">
            <span className="movie--details-item-type">Rating:</span>{" "}
            {imDbRating}
          </p>
          {watched ? (
            <>
              <WatchedIcon
                className="movie--grid-icon icon-item watched"
                title="Watched"
                onClick={() => handleDeleteWatched(id)}
              />
              <strong className="movie--grid-icon-text"> Watched</strong>
            </>
          ) : (
            <>
              <WatchedIcon
                className="movie--grid-icon icon-item nonwatched"
                title="Non Watched"
                onClick={handleSetWatched}
              />
              <strong className="movie--grid-icon-text"> Non Watched</strong>
            </>
          )}
        </div>
      </Paper>
    </Grid>
  );
};

Movie.propTypes = {
  data: propTypes.object,
};

const mapStateToProps = (state) => {
  return {
    watchedMovies: state.watchedMovies,
  };
};

const mapDispatchToProps = {
  setWatched,
  deleteWatched,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
