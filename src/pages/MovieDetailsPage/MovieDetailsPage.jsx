import { useEffect, useState } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { getMoviesDetails } from "../../services/takeApi";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/Loader/Loader";
import s from "./MovieDetailsPage.module.css";

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
      <div className={s.info}>
        <h3>Additional information</h3>
        <nav>
          <ul className={s.infoNav}>
            <li>
              <NavLink
                to="cast"
                className={({ isActive }) => (isActive ? s.active : s.link)}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to="reviews"
                className={({ isActive }) => (isActive ? s.active : s.link)}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
