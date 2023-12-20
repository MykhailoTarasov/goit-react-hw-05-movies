import { useLocation } from 'react-router-dom';
import {
  AddStyledNavLink,
  AditionalInfo,
  Container,
  GenresList,
  InfoBox,
  Main,
  StyledBackButton,
  StyledNavLink,
} from './OneMovieDetails.Styled';
import { FaBackwardStep } from 'react-icons/fa6';

const OneMovieDetails = ({ data }) => {
  const location = useLocation();

  const { title, overview, vote_average, poster_path, release_date, genres } =
    data;

  const releaseYear = release_date ? release_date.slice(0, 4) : null;
  const userScore = Math.ceil(vote_average * 10);

  return (
    <Container>
      <StyledNavLink to={location.state?.from ?? '/quizzes'}>
        <StyledBackButton>
          <FaBackwardStep />
        </StyledBackButton>
      </StyledNavLink>

      <Main>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          width={250}
          alt="poster"
        />
        <InfoBox>
          <h2>
            {title} {releaseYear && `(${releaseYear})`}
          </h2>
          <span>User score: {userScore}%</span>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <GenresList>
            {genres &&
              genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </GenresList>
        </InfoBox>
      </Main>
      <AditionalInfo>
        <h3>Additional informacion</h3>
        <ul>
          <li>
            <AddStyledNavLink to="cast">Cast</AddStyledNavLink>
          </li>
          <li>
            <AddStyledNavLink to="reviews">Reviews</AddStyledNavLink>
          </li>
        </ul>
      </AditionalInfo>
    </Container>
  );
};

export default OneMovieDetails;
