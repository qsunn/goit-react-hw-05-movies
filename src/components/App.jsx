import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';

import { HomePage } from 'pages/HomePage/HomePage';
import { MovieCastSubPage } from 'pages/MovieCastSubPage/MovieCastSubPage';
import { MovieReviewsSubPage } from 'pages/MovieReviewsSubPage/MovieReviewsSubPage';

const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCastSubPage />} />
            <Route path="reviews" element={<MovieReviewsSubPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
