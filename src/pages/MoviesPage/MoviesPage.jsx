import { useSearchParams } from 'react-router-dom';
import { useFetchMoviesByQuery } from 'hooks/useFetchMoviesByQuery';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query');
  const movies = useFetchMoviesByQuery(search);

  const submitHandler = query => {
    setSearchParams({ query: query });
  };

  return (
    <div className="container">
      <SearchForm submitHandler={submitHandler} />
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};
