import { PropTypes } from 'prop-types';

import { CastCard } from 'components/CastCard/CastCard';
import { Notification } from 'components/Notification/Notification';

export const CastList = ({ cast }) => {
  return cast?.length > 0 ? (
    <ul>
      {cast.map(actor => {
        return <CastCard key={actor.credit_id} actor={actor} />;
      })}
    </ul>
  ) : (
    <Notification message="No cast info" />
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      credit_id: PropTypes.string,
    })
  ).isRequired,
};
