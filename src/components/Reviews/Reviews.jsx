import { useParams } from 'react-router-dom';
import * as API from 'services/api/api';
import { useState, useEffect } from 'react';

export const Reviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState({});
  // page, total_pages, total_results, results
  useEffect(() => {
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

  const { total_results, results } = movieReviews;

  return (
    <>
      {!total_results ? (
        <p> We don't have any reviews for this movie </p>
      ) : (
        <ul>
          {results.map(({ author, content }) => {
            return (
              <li key={author}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
