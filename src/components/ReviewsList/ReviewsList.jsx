import { PropTypes } from 'prop-types';
import { ReviewCard } from 'components/ReviewCard/ReviewCard';
import { Notification } from 'components/Notification/Notification';

export const ReviewsList = ({ reviews }) => {
  return reviews?.length > 0 ? (
    <ul>
      {reviews.map(review => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </ul>
  ) : (
    <Notification message="No reviews" />
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ).isRequired,
};
