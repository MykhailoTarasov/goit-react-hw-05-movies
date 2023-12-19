const OneMovieDetails = ({ data }) => {
  const { title, overview, vote_average, poster_path, release_date, genres } =
    data;

  const releaseYear = release_date ? release_date.slice(0, 4) : null;
  const userScore = Math.ceil(vote_average * 10);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        width={250}
        alt="poster"
      />
      <div>
        <h2>
          {title} {releaseYear && `(${releaseYear})`}
        </h2>
        <span>User score: {userScore}%</span>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default OneMovieDetails;
