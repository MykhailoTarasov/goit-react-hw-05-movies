import { serviceMovieCredits } from 'api';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [movieCredits, setMovieCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    async function fechMovieCredits() {
      try {
        setIsLoading(true);
        setError(false);
        const creditsById = await serviceMovieCredits(movieId);
        toast.success('Movies found successfully!');
        const limitedCredits = creditsById.cast.slice(0, 16);
        setMovieCredits(limitedCredits);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fechMovieCredits();
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieCredits.map(actor => (
          <li key={actor.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              width={150}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
      
      {error && <span>Error! Please, reload this page!</span>}

      {isLoading && <Loader />}
      <Toaster position="top-right" />
    </div>
  );
};

export default Cast;
