import { useSearchParams } from 'react-router-dom';
import { useFetchMoviesByQuery } from 'hooks/useFetchMoviesByQuery';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const movies = useFetchMoviesByQuery(query);

  const submitHandler = query => {
    setSearchParams(query.trim() !== '' ? { query } : {});
  };

  return (
    <div className="container">
      <SearchForm submitHandler={submitHandler} />
      {movies && <MoviesList items={movies} />}
    </div>
  );
};

export default MoviesPage;
