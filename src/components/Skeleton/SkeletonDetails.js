import {
  MovieDetailsContainer,
  MovieWrapper,
} from 'components/MovieCard/MovieCardStyled';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const SkeletonDetails = () => {
  return (
    <MovieWrapper>
      <MovieDetailsContainer>
        <div className="poster">
          <Skeleton width={300} height={450} />
        </div>
        <div className="movie-info">
          <h2 className="title">
            <Skeleton width={500} height={45} />
          </h2>
          <p className="scores">
            User scores:{' '}
            <span>
              <Skeleton width={30} height={15} />
            </span>
          </p>
          <p className="genres ">
            <span>Genres:</span> <Skeleton width={300} height={15} />
          </p>
          <h3 className="overview-title">Overview</h3>
          <p className="overview-text">
            <Skeleton width={500} height={15} count={3} />
          </p>
        </div>
      </MovieDetailsContainer>
    </MovieWrapper>
  );
};
