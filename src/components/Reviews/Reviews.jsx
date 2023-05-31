import { useParams } from 'react-router-dom';
import * as API from 'services/api/api';
import { useState, useEffect } from 'react';
import { ReviewsStyled } from './Reviews.styled';
import { getFormattedTime } from 'services/utilities';
import defaultProfileNoGender from '../../images/placeholders/Blank_noGender.svg';
import { ReadMore } from './ReadMore/ReadMore';

export const Reviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState({});
  // page, total_pages, total_results, results
  useEffect(() => {
    if (!movieId) {
      return;
    }

    const getMovieReviews = async () => {
      try {
        const response = await API.getMovieReviews(movieId);
        setMovieReviews(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieReviews();
  }, [movieId]);
  console.log(movieReviews);
  const { total_results, results } = movieReviews;

  return (
    <ReviewsStyled>
      {!total_results ? (
        <p className="no-reviews"> We don't have any reviews for this movie </p>
      ) : (
        <ul>
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
                console.log(avatar_path);
                avatar = avatar_path.slice(1);
              } else {
                avatar = `${API.IMAGES_URL}/w64_and_h64_face${avatar_path}`;
              }

              return (
                <li key={id}>
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
                  <p className="text">{content}</p>
                  {/* <ReadMore text={content} maxLength={100} /> */}
                </li>
              );
            }
          )}
        </ul>
      )}
    </ReviewsStyled>
  );
};
