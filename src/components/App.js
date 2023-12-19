import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";
import { serviceSearchMovies } from "api";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./Loader/Loader";

const App = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const searchValue = searchParams.get('query') || '';

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    async function fechMovieBySearchValue() {
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
    fechMovieBySearchValue();
  }, [searchValue]);

  const updateSearchParams = value => {
    const nextParams = value !== '' ? { query: value } : {};
    setSearchParams(nextParams);
  };

  




  return (
    <div>
      <SearchBar onSubmit={updateSearchParams}/>

      {error && <span>Whoops... Error! Please, reload this page!</span>}

      {isLoading && (<Loader/>)}
      <Toaster position="top-right" />
    </div>
  )
}

export default App;


















