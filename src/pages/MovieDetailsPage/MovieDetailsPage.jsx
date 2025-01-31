import { useEffect, useState } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { getMoviesDetails } from "../../services/takeApi";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    async function fetchData() {
      try {
        const res = await getMoviesDetails(movieId);
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [movieId]);

  return !movie ? (
    <Loader />
  ) : (
    <div>
      <MovieCard movie={movie} />
      <h3>Additional information</h3>
      <nav>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
