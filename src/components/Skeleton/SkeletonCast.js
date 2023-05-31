import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const SkeletonCast = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((card, index) => (
      <div className="cast-item" key={index}>
        <div className="avatar">
          <Skeleton width={66} height={66} />
        </div>
        <div className="actor-card">
          <p className="actor-name">
            <Skeleton width={75} />
          </p>
          <p className="character-name">
            <Skeleton width={75} />
          </p>
        </div>
      </div>
    ));
};
