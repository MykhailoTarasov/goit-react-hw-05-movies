import { serviceMovieReviews } from 'api';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    async function fechMovieReviews() {
      try {
        setIsLoading(true);
        setError(false);
        const reviewsById = await serviceMovieReviews(movieId);
        toast.success('Movies found successfully!');
        if (reviewsById.results && reviewsById.results.length > 0) {
          setMovieReviews(reviewsById.results);
        } else {
          setMovieReviews([]);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fechMovieReviews();
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieReviews.length > 0 ? (
          movieReviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>

      {error && <span>Error! Please, reload this page!</span>}

      {isLoading && <Loader />}
      <Toaster position="top-right" />
    </div>
  );
};

export default Reviews;
