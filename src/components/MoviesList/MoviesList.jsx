import { Link, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Notification } from 'components/Notification/Notification';

export const MoviesList = ({ items }) => {
  const location = useLocation();
  const currentLocation = location.pathname.includes('movies')
    ? ''
    : '/movies/';

  if (!items || !items.length) return <Notification message="Nothing found" />;
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link to={currentLocation + item.id} state={{ from: location }}>
            {item.title ?? item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
