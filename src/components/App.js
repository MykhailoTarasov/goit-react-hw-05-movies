import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './Layout/Layout';


const HomePage = lazy(() => import('../pages/HomePage/HomePage.js'))
const Movies = lazy(() => import('../pages/Movies.js'))
const MovieDetails = lazy(() => import('../pages/MovieDetails.js'))
const Cast = lazy(() => import('./Cast/Cast.js'))
const Reviews = lazy(() => import('./Reviews/Reviews.js'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage.js'))


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />

      </Route>
    </Routes>
  );
};

export default App;
