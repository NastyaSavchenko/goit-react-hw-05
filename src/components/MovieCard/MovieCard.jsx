import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <li>
      <Link to={`/movies/${movie.id}`}> {movie.original_title}</Link>;{" "}
    </li>
  );
};

export default MovieCard;
