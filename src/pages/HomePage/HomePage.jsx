import { useFetchMovies } from 'hooks/useFetchMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const HomePage = () => {
  const movies = useFetchMovies();

  return (
    <div className="container">
      <h1>Trending today</h1>
      {movies && <MoviesList items={movies} />}
    </div>
  );
};
