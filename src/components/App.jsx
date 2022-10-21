import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';

import { HomePage } from 'pages/HomePage/HomePage';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';
import { MovieCastSubPage } from 'pages/MovieCastSubPage/MovieCastSubPage';
import { MovieReviewsSubPage } from 'pages/MovieReviewsSubPage/MovieReviewsSubPage';

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
