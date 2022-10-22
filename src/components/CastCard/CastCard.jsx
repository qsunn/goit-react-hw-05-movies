import { PropTypes } from 'prop-types';
import css from './CastCard.module.css';

const photoBaseUrl = 'https://image.tmdb.org/t/p/w200';
const noImage =
  'https://upload.wikimedia.org/wikipedia/commons/4/46/Question_mark_%28black%29.svg';

export const CastCard = ({ item }) => {
  const { profile_path, name, character } = item;
  return (
    <li className={css.CastCard}>
      <img
        src={profile_path ? photoBaseUrl + profile_path : noImage}
        alt={name}
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  );
};

CastCard.propTypes = {
  item: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string,
  }).isRequired,
};
