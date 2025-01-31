import MovieItem from "../MovieItem/MovieItem";

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => {
        return <MovieItem movie={movie} key={movie.id} />;
      })}
    </ul>
  );
};

export default MoviesList;
