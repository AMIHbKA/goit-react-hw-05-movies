import { Container } from 'components/UI/GlobalStyles/Container.styled';
import { useLocation } from 'react-router-dom';
import { SkeletonStyle } from './Skeleton.styled';
import { SkeletonCard } from './SkeletonCard';

export const SkeletonMoviesList = () => {
  const location = useLocation();

  return (
    <Container>
      {location.pathname === '/' && (
        <SkeletonStyle>
          <SkeletonCard cards={20} />
        </SkeletonStyle>
      )}
    </Container>
  );
};
