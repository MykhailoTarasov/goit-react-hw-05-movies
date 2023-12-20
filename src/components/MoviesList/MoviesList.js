import { useLocation } from 'react-router-dom';
import { Item, List, StyledNavLink } from './MoviesList.Styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
            <StyledNavLink
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {/* <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width={100}
              alt="poster"
            /> */}
              <h4>{movie.title}</h4>
            </StyledNavLink>
          </Item>
        ))}
      </List>
    
  );
};

export default MoviesList;
