import { useState } from 'react';
import { useFetchMoviesByQuery } from 'hooks/useFetchMoviesByQuery';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';

export const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const movies = useFetchMoviesByQuery(query);

  const submitHandler = query => {
    setQuery(query);
  };

  return (
    <div className="container">
      <SearchForm submitHandler={submitHandler} />
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};
