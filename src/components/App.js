import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        
      </Route>
    </Routes>
  );
};

export default App;
