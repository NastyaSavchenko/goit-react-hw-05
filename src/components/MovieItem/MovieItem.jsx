import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <li>
      <Link to={`/movies/${movie.id}`}> {movie.original_title}</Link>;
    </li>
  );
};

export default MovieCard;
