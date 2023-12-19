import { serviceTrendingMovies } from 'api';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fechTrendingMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const movies = await serviceTrendingMovies();
        setTrendingMovies(movies.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fechTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending movies</h2>
      <MoviesList movies={trendingMovies} />

      {error && <span>Error! Please, reload this page!</span>}

      {isLoading && <Loader />}
    </div>
  );
};

export default Home;
