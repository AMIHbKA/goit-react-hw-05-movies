import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const SkeletonReviews = ({ reviews }) => {
  return Array(reviews)
    .fill(0)
    .map((item, index) => (
      <div className="item" key={index}>
        <div className="reviewer">
          <div className="avatar">
            <Skeleton width={64} height={64} />
          </div>
          <div className="skeleton-info info">
            <div className="rating-wrapper">
              <div>
                A review by
                <span className="author">
                  <Skeleton width={150} height={16} />
                </span>
              </div>
            </div>
            <div className="created">
              <Skeleton width={83} height={16} />
            </div>
            <div className="skeleton-text">
              <Skeleton count={4} />
            </div>
          </div>
        </div>
      </div>
    ));
};
