import { useEffect, useState } from "react";
import { getTrendMovies } from "../../services/takeApi";
import MovieList from "../../components/MovieList/MovieList";

const Home = () => {
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

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;
