import { IMAGES_URL } from 'services/api/api';

export const MovieCard = ({ movie }) => {
  const { genres, title, vote_average, poster_path, overview } = movie;
  console.log('movie', movie);
  return (
    <>
      <img src={`${IMAGES_URL}/w300${poster_path}`} alt={`${title} poster`} />
      <h2>{title}</h2>
      <p>
        User scores: <span>{(vote_average * 10).toFixed(0)}%</span>
      </p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres?.map(({ name }) => name).join(', ')}</p>
    </>
  );
};
