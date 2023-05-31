import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const SkeletonCard = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((card, index) => (
      <div className="card-skeleton" key={index}>
        <div className="poster">
          <Skeleton width={200} height={300} />
        </div>
        <div className="title">
          <Skeleton width={200} height={25} />
        </div>
      </div>
    ));
};
