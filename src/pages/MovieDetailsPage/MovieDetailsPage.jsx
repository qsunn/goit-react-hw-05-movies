import {
  useLocation,
  useNavigate,
  useParams,
  Outlet,
  Link,
} from 'react-router-dom';

import { useFetchMovieById } from 'hooks/useFetchMovieById';

import { Button } from 'components/Button/Button';
import { MovieCard } from 'components/MovieCard/MovieCard';

export const MovieDetailsPage = () => {
  const navigateTo = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();
  const movie = useFetchMovieById(movieId);

  return (
    movie && (
      <div>
        <div className="container">
          <Button
            title="Go Back"
            onClick={() => navigateTo(location?.state?.from ?? '/')}
          />
          <MovieCard movie={movie} />
        </div>
        <div className="container">
          <h3>Additional Information</h3>
          <ul>
            <li>
              <Link state={{ from: location?.state?.from }} to="cast">Cast</Link>
            </li>
            <li>
              <Link state={{ from: location?.state?.from }} to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <Outlet />
        </div>
      </div>
    )
  );
};
