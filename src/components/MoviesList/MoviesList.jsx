import { Link, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import css from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const currentLocation = location.pathname === '/movies' ? '' : '/movies/';

  return movies?.length > 0 ? (
    <ul className={css.MoviesList}>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={currentLocation + movie.id} state={{ from: location }}>
              {movie.title ?? movie.name}
            </Link>
          </li>
        );
      })}
    </ul>
  ) : (
    <Notification message="Nothing found" />
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
