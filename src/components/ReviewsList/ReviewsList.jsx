import { PropTypes } from 'prop-types';
import { ReviewCard } from 'components/ReviewCard/ReviewCard';
import { Notification } from 'components/Notification/Notification';

export const ReviewsList = ({ items }) => {
  if (!items || !items.length) return <Notification message="No reviews" />;
  return (
    <ul>
      {items.map(item => (
        <ReviewCard key={item.id} item={item} />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ).isRequired,
};
