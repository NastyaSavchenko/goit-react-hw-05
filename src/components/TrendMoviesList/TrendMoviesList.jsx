import { useEffect, useState } from "react";
import { getTrendMovies } from "../../services/takeApi";
import MoviesList from "../MoviesList/MoviesList";

const TrendMoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fechData() {
      try {
        const rest = await getTrendMovies();
        setMovies(rest.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    fechData();
  }, []);

  return <MoviesList movies={movies} />;
};

export default TrendMoviesList;
