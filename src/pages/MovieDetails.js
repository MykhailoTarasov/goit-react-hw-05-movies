import { serviceMovieDetails } from 'api';
import Loader from 'components/Loader/Loader';
import OneMovieDetails from 'components/OneMovieDetails/OneMovieDetails';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {
  Outlet,
  useParams,
  useLocation,
  Link,
} from 'react-router-dom';

const MovieDetails = () => {
  const [moviesDetails, setMoviesDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();


  useEffect(() => {
    if (!movieId) return;

    async function fechMovieDetails() {
      try {
        setIsLoading(true);
        setError(false);
        const MovieById = await serviceMovieDetails(movieId);
        toast.success('Movies found successfully!');
        setMoviesDetails(MovieById);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fechMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Link to={location.state?.from ?? '/quizzes'}>
        <button>Back</button>
      </Link>

      <OneMovieDetails data={moviesDetails} />
      <div>
        <p>Additional informacion</p>
        <ul>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </ul>
      </div>

      <Outlet />

      {error && <span>Error! Please, reload this page!</span>}

      {isLoading && <Loader />}
      <Toaster position="top-right" />
    </div>
  );
};

export default MovieDetails;
