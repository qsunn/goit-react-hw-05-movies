import { PropTypes } from 'prop-types';
import css from './ReviewCard.module.css';

export const ReviewCard = ({ item }) => {
  const { author, content } = item;
  return (
    <li className={css.ReviewCard}>
      <h4>Author: {author}</h4>
      <p>{content}</p>
    </li>
  );
};

ReviewCard.propTypes = {
  item: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};
