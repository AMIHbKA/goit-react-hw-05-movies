import { useState, useEffect } from 'react';
import * as API from '../services/api/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

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
          return <li key={id}>{title}</li>;
        })}
    </ul>
  );
};

export default Home;
