import { PropTypes } from 'prop-types';
import { CastCard } from 'components/CastCard/CastCard';
import { Notification } from 'components/Notification/Notification';

export const CastList = ({ items }) => {
  if (!items || !items.length) return <Notification message="No cast info" />;
  return (
    <ul>
      {items.map(item => (
        <CastCard key={item.id} item={item} />
      ))}
    </ul>
  );
};

CastList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ).isRequired,
};
