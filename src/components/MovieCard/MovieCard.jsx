import { PropTypes } from 'prop-types';
import css from './MovieCard.module.css';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
const noImage =
  'https://upload.wikimedia.org/wikipedia/commons/4/46/Question_mark_%28black%29.svg';

export const MovieCard = ({ movie }) => {
  return (
    <div className={css.MovieCard}>
      <img
        src={movie.backdrop_path ? imgBaseUrl + movie.backdrop_path : noImage}
        alt="poster"
      />
      <div className={css.info}>
        <h2>
          {movie.title ?? movie.name} ({movie.release_date.split('-')[0]})
        </h2>
        <p>User score: {Math.round(movie.vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie?.genres.map(genre => `${genre.name} `)}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }).isRequired,
};
