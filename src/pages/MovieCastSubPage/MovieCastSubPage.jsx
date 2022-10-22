import { useParams } from 'react-router-dom';
import { useFetchMovieCast } from 'hooks/useFetchMovieCast';
import { CastList } from 'components/CastList/CastList';

export const MovieCastSubPage = () => {
  const { movieId } = useParams();
  const credits = useFetchMovieCast(movieId);
  return credits && <CastList items={credits.cast} />;
};
