import { PropTypes } from 'prop-types';
import css from './ReviewCard.module.css';

export const ReviewCard = ({ review }) => {
  return (
    <li className={css.ReviewCard}>
      <h4>Author: {review.author}</h4>
      <p>{review.content}</p>
    </li>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};
