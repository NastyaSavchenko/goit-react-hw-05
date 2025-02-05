import { Outlet } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { getMoviesByName } from "../../services/takeApi.js";
import SearchMovies from "../../components/SearchMovies/SearchMovies.jsx";
import MoviesList from "../../components/MoviesList/MoviesList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import toast from "react-hot-toast";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [moviesData, setmoviesData] = useState([]);

  const getQuery = (searchName) =>
    searchName === ""
      ? toast.error("Enter the name of the movie")
      : setQuery(searchName);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchData() {
      try {
        const response = await getMoviesByName(query);
        const data = response.data.results;

        data.length === 0
          ? toast.error(`Sorry, we can't find any ${query}`)
          : setmoviesData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [query]);

  return (
    <main>
      <SearchMovies onSubmit={getQuery} />
      {moviesData && <MoviesList movies={moviesData} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Movies;
