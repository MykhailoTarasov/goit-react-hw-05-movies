import { serviceSearchMovies } from 'api';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {  useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const searchValue = searchParams.get('query') || '';

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    async function movieBySearchValue() {
      try {
        setIsLoading(true);
        setError(false);
        const searchMovie = await serviceSearchMovies(searchValue);
        if (searchMovie.results.length > 0) {
          toast.success('Movies found successfully!');
          setSearchMovies(searchMovie.results);
        } else {
          toast.error(
            'Ooops...Nothing found. Update the search value, please!'
          );
          setSearchMovies([]);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    movieBySearchValue();
  }, [searchValue]);

  const updateSearchParams = value => {
    const nextParams = value !== '' ? { query: value } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      
      <SearchBar onSubmit={updateSearchParams} />
      {searchMovies.length > 0 && <MoviesList movies={searchMovies} />}

      {error && <span>Error! Please, reload this page!</span>}

      {isLoading && <Loader />}
      <Toaster position="top-right" />
    </div>
  );
};

export default Movies;
