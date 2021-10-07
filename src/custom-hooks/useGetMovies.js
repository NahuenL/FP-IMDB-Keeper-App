import { useState } from "react";
import axios from "axios";
import { useLocalStorage } from "./useLocalStorage";

const useGetMovies = () => {
  const [movies, setMovies] = useLocalStorage("movies", "");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentQueryMovie, setCurrentQueryMovie] = useState("");
  const [titleText, setTitleText] = useState("Most Popular Movies");

  /* Only 100 api call per day */
  //key1: k_mzmi0cie
  //key2: k_9vv1k5tv
  //key3: k_l7xrge7t
  const api_key = "k_mzmi0cie";

  async function getMovies() {
    try {
      document.querySelector("#queryMovie").value = "";
      setCurrentQueryMovie("");
      setTitleText("Most Popular Movies");
      const response = await axios.get(
        "https://imdb-api.com/en/API/MostPopularMovies/"+api_key+"/"
      );
      const result = response.data.items;
      setMovies(result);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  const validateQueryMovie = (
    e,
    queryMovie = document
      .querySelector("#queryMovie")
      .value.toLowerCase()
      .trim()
  ) => {
    if (e.type === "keypress" && e.key !== "Enter") return;

    const words = queryMovie.match(/\w+/g);
    queryMovie = words && words.join(" ");
    if (queryMovie && queryMovie !== currentQueryMovie) {
      setLoading(true);
      getMovieSearch(queryMovie);
    }
  };

  async function getMovieSearch(queryMovie) {
    try {
      setCurrentQueryMovie(queryMovie);
      const response = await axios.get(
        "https://imdb-api.com/en/API/SearchMovie/"+api_key+"/" + queryMovie
      );
      const result = response.data.results;
      setTitleText(
        result.length
          ? "Results For " + queryMovie
          : "No Results For " + queryMovie
      );
      setMovies(result);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  async function getMovieDetail(movieID) {
    try {
      const response = await axios.get(
        "https://imdb-api.com/en/API/Title/"+api_key+"/" + movieID
      );
      const result = response.data;
      setTitleText(
        result.length ? response.data.title : "Ups... Movie Not Found "
      );
      setMovies(result);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  return {
    titleText,
    movies,
    loading,
    error,
    getMovies,
    validateQueryMovie,
    getMovieDetail,
  };
};
export default useGetMovies;
