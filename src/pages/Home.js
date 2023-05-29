import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as API from '../services/api/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getTrends = async () => {
      try {
        const response = await API.getTrendingMovies();
        setMovies(response.results);
      } catch (error) {}
    };
    getTrends();
  }, [movies]);

  const renderItems = movies.length > 0;
  console.log('renderItems', renderItems);
  return (
    <ul>
      {renderItems &&
        movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Home;
