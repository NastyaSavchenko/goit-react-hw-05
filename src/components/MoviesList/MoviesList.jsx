import MovieCard from "../MovieCard/MovieCard";

const MoviesList = ({ movies }) => {
  console.log(movies);
  return (
    <ul>
      {movies.map((movie) => {
        return <MovieCard movie={movie} key={movie.id} />;
      })}
    </ul>
  );
};

export default MoviesList;
