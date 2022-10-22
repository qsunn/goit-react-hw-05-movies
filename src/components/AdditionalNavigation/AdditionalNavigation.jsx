import { Link } from 'react-router-dom';

export const AdditionalNavigation = ({ location }) => {
  return (
    <>
      <h3>Additional Information</h3>
      <ul>
        <li>
          <Link state={location} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link state={location} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
    </>
  );
};
