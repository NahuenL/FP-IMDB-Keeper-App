import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import RestoreIcon from "@material-ui/icons/Restore";
import Movie from "./Movie";
import Message from "./Message";
import Error from "./Error";
import Loader from "./Loader";
import useGetMovies from "../custom-hooks/useGetMovies";

const MoviesList = () => {
  const { titleText, movies, loading, error, getMovies, validateQueryMovie } =
    useGetMovies();

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div className="root">
        <Paper className="paper default-paper">
          <TextField
            id="queryMovie"
            label="Movie"
            margin="normal"
            variant="outlined"
            autoComplete="off"
            onKeyPress={(e) => validateQueryMovie(e)}
          />

          <IconButton onClick={(e) => validateQueryMovie(e)}>
            <small>Search</small>
            <SearchIcon />
          </IconButton>

          <IconButton onClick={getMovies}>
            <small>Clear&nbsp;</small>
            <RestoreIcon />
          </IconButton>
        </Paper>
        <Message infoText={titleText} />
        <Grid container spacing={3} justify="center">
          {loading ? (
            <Loader />
          ) : error ? (
            <Error />
          ) : (
            movies.map((movie) => <Movie key={movie.id} data={movie} />)
          )}
        </Grid>
      </div>
    </>
  );
};

export default MoviesList;
