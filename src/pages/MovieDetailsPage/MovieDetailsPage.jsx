import { useLocation, useNavigate, useParams, Outlet } from 'react-router-dom';

import { useFetchMovieById } from 'hooks/useFetchMovieById';

import { Button } from 'components/Button/Button';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Notification } from 'components/Notification/Notification';
import { AdditionalNavigation } from 'components/AdditionalNavigation/AdditionalNavigation';

const MovieDetailsPage = () => {
  const navigateTo = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();
  const movie = useFetchMovieById(movieId);

  if (!movie) return <Notification message="Wrong movie" />;
  return (
    <>
      <div className="container">
        <Button
          title="Go Back"
          onClick={() => navigateTo(location?.state?.from ?? '/')}
        />
        <MovieCard item={movie} />
      </div>
      <div className="container">
        <AdditionalNavigation location={location?.state} />
      </div>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
