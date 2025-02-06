import { Outlet, useSearchParams } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { getMoviesByName } from "../../services/takeApi.js";
import SearchMovies from "../../components/SearchMovies/SearchMovies.jsx";
import MovieList from "../../components/MovieList/MovieList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import toast from "react-hot-toast";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryFromURL = searchParams.get("query") || "";

  const [query, setQuery] = useState(queryFromURL);
  const [moviesData, setMoviesData] = useState([]);

  const getQuery = (searchName) => {
    if (searchName.trim() === "") {
      toast.error("Enter the name of the movie");
      return;
    }

    setQuery(searchName);
    setSearchParams({ query: searchName });
  };

  useEffect(() => {
    if (!query) return;

    async function fetchData() {
      try {
        const response = await getMoviesByName(query);
        const data = response.data.results;

        if (data.length === 0) {
          toast.error(`Sorry, we can't find any "${query}"`);
          setMoviesData([]);
        } else {
          setMoviesData(data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [query]);

  return (
    <main>
      <SearchMovies onSubmit={getQuery} />
      {moviesData.length > 0 && <MovieList movies={moviesData} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Movies;
