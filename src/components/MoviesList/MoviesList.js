import { NavLink } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width={100}
              alt="poster"
            />
            <h2>{movie.title}</h2>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
