import { PropTypes } from 'prop-types';
import css from './CastCard.module.css';

const photoBaseUrl = 'https://image.tmdb.org/t/p/w200';
const noImage =
  'https://upload.wikimedia.org/wikipedia/commons/4/46/Question_mark_%28black%29.svg';

export const CastCard = ({ actor }) => {
  return (
    <li className={css.CastCard}>
      <img
        src={actor.profile_path ? photoBaseUrl + actor.profile_path : noImage}
        alt={actor.name}
      />
      <p>{actor.name}</p>
      <p>Character: {actor.character}</p>
    </li>
  );
};

CastCard.propTypes = {
  actor: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string,
  }).isRequired,
};
