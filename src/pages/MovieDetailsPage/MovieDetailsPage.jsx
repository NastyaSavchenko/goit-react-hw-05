import { useEffect, useState, Suspense } from "react";
import {
  useParams,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { getMoviesDetails } from "../../services/takeApi";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/Loader/Loader";
import { BsArrowLeft } from "react-icons/bs";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [oldPath, setOldPath] = useState(location.state?.from ?? "/");

  useEffect(() => {
    if (!movieId) return;

    async function fetchData() {
      try {
        const res = await getMoviesDetails(movieId);
        setMovie(res.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [movieId]);

  const goBack = () => {
    navigate(oldPath);
  };

  return !movie ? (
    <Loader />
  ) : (
    <div>
      <button onClick={goBack} className={s.goBackBtn}>
        <BsArrowLeft style={{ marginRight: "10px" }} />
        Go back
      </button>
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
