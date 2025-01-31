const MovieCard = ({ movie }) => {
  const { original_title, overview, poster_path, vote_average, genres } = movie;

  return (
    <div>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "/placeholder.jpg"
          }
          alt={original_title}
        />
      </div>
      <div>
        <h2>{original_title}</h2>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map((genre) => {
            return <li key={genre.id}>{genre.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;
