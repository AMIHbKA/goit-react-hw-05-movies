import { useParams } from 'react-router-dom';
import * as API from 'services/api/api';
import { useState, useEffect } from 'react';
import { ReviewsStyled } from './Reviews.styled';
import { getFormattedTime } from 'services/utilities';
import defaultProfileNoGender from '../../images/placeholders/Blank_noGender.svg';
import { ReadMore } from './ReadMore/ReadMore';
import { SkeletonReviews } from 'components/Skeleton/SkeletonReviews';
import PropTypes from 'prop-types';

export const Reviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const getMovieReviews = async () => {
      try {
        setLoading(true);
        const response = await API.getMovieReviews(movieId);
        setMovieReviews(response);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMovieReviews();

    return () => {
      API.abortController.abort();
    };
  }, [movieId]);

  const { total_results, results } = movieReviews;

  if (isLoading) {
    return (
      <ReviewsStyled>
        {isLoading && (
          <div className="list">
            <SkeletonReviews reviews={3} />
          </div>
        )}
      </ReviewsStyled>
    );
  } else {
    return (
      <ReviewsStyled>
        {!total_results ? (
          <p className="no-reviews">
            {' '}
            We don't have any reviews for this movie{' '}
          </p>
        ) : (
          <ul className="list">
            {results.map(
              ({
                author,
                content,
                author_details: { avatar_path, rating },
                created_at,
                id,
              }) => {
                const formattedDate = getFormattedTime(created_at);
                let avatar = avatar_path;

                if (!avatar) {
                  avatar = defaultProfileNoGender;
                } else if (avatar_path.includes('http')) {
                  avatar = avatar_path.slice(1);
                } else {
                  avatar = `${API.IMAGES_URL}/w64_and_h64_face${avatar_path}`;
                }

                return (
                  <li className="item" key={id}>
                    <div className="reviewer">
                      <img className="avatar" src={avatar} alt="" />
                      <div className="info">
                        <div className="rating-wrapper">
                          <p>
                            A review by <span className="author">{author}</span>
                          </p>
                          {rating && (
                            <span className="rating">
                              &#9734; {rating.toFixed(1)}
                            </span>
                          )}
                        </div>
                        <time className="created" dateTime={created_at}>
                          {formattedDate}
                        </time>
                      </div>
                    </div>
                    <ReadMore text={content} maxLength={350} />
                  </li>
                );
              }
            )}
          </ul>
        )}
      </ReviewsStyled>
    );
  }
};

Reviews.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      avatar_path: PropTypes.string.isRequired,
      rating: PropTypes.string,
      created_at: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
