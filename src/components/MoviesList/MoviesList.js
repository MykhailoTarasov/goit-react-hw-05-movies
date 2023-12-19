const MoviesList = ({ trendingMovies }) => {
  const defaultImg =
    'https://ukraine.ua/wp-content/uploads/2023/03/prapor-ukrayiny-ukrayina-majdan-nezalezhnosti.jpg';

  return <ul>
  {trendingMovies.map(movie => (
    <li key={movie.id}>
      <a href=" ">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defaultImg
          }
          width={100}
          alt="poster"
        />
        <h2>{movie.title}</h2>
      </a>
    </li>
  ))}
</ul>
};

export default MoviesList;
