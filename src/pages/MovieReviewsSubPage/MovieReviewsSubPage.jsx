import { useParams } from 'react-router-dom';
import { useFetchMovieReviews } from 'hooks/useFetchMovieReviews';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

export const MovieReviewsSubPage = () => {
  const { movieId } = useParams();
  const reviews = useFetchMovieReviews(movieId);
  return reviews && <ReviewsList items={reviews.results} message='No reviews' />;
};
