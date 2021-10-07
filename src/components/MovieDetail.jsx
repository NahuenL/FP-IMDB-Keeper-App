import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { setWatched, deleteWatched } from "../actions";
import useGetMovies from "../custom-hooks/useGetMovies";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import WatchedIcon from "@material-ui/icons/BeenhereTwoTone";

import "../assets/styles/components/MovieDetail.scss";

const MovieDetail = (props) => {
  const URLid = window.location.pathname.split("/")[3];

  const { titleText, movies, getMovieDetail } = useGetMovies();

  const [watched, setWatched] = useState(false);
  const { watchedMovies } = props;

  useEffect(() => {
    getMovieDetail(URLid);
  }, []);

  useEffect(() => {
    wasWatched();
  }, []);

  const handleSetWatched = () => {
    const data = movies;
    props.setWatched({ data });
    setWatched(true);
  };

  const handleDeleteWatched = (itemId) => {
    props.deleteWatched(itemId);
    setWatched(false);
  };

  const wasWatched = () => {
    const result = watchedMovies.filter(
      (watchedMovie) => watchedMovie.data.id === URLid
    );
    if (result.length) {
      setWatched(true);
    }
  };

  const {
    id,
    title,
    originalTitle,
    year,
    image,
    releaseDate,
    plot,
    directorList,
    writerList,
    actorList,
  } = movies;

  return (
    <Paper className="paper front-paper">
      {movies.length ? (
        <>
          <strong className="title">{titleText}</strong>
        </>
      ) : (
        <>
          <strong className="title">{`${title} - ${year}`}</strong>
          <br />
          <br />
          <img
            src={image}
            alt={originalTitle}
            className="movie-detail---img-full"
          />
          <br />
          <br />
          {watched ? (
            <>
              <WatchedIcon
                className="movie-detail--grid-icon icon-item watched"
                title="Watched"
                onClick={() => handleDeleteWatched(id)}
              />
              <strong className="movie-detail--grid-icon-text"> Watched</strong>
            </>
          ) : (
            <>
              <WatchedIcon
                className="movie-detail--grid-icon icon-item nonwatched"
                title="Un Watched"
                onClick={handleSetWatched}
              />
              <strong className="movie-detail--grid-icon-text">
                {" "}
                Non Watched
              </strong>
            </>
          )}
          <ul>
            <li key={`movie_title_${id}`}>
              <strong>Original Title: </strong>
              <span>{originalTitle ? originalTitle : title}</span>
            </li>
            <li key={`movie_year_${id}`}>
              <strong>Year: </strong>
              <span>{year}</span>
            </li>
            <li key={`movie_releaseDate_${id}`}>
              <strong>Release Date: </strong>
              <span>{releaseDate}</span>
            </li>
          </ul>
          <h4>Plot</h4>
          <p>{plot}</p>
          {directorList.length && (
            <>
              <h4>Director List</h4>
              <ul>
                {directorList.map((director) => {
                  return <li key={director.id}>{director.name}</li>;
                })}
              </ul>
            </>
          )}
          {writerList.length && (
            <>
              <h4>Writer List</h4>
              <ul>
                {writerList.map((writer) => {
                  return <li key={writer.id}>{writer.name}</li>;
                })}
              </ul>
            </>
          )}
          {actorList.length && (
            <>
              <h4>Actor List</h4>
              <Grid container spacing={2}>
                {actorList.map((actor) => {
                  return (
                    <Grid item xs={12} sm={2} key={actor.id}>
                      <img
                        src={actor.image}
                        alt="actor"
                        className="actor-img"
                      />
                      <br />
                      <strong>{actor.name}</strong>
                    </Grid>
                  );
                })}
              </Grid>
            </>
          )}
        </>
      )}
    </Paper>
  );
};

MovieDetail.propTypes = {
  movies: propTypes.object,
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
