import axios from 'axios';

// "backdrop_sizes": "w300", "w780", "w1280", "original"
// "poster_sizes": "w92", "w154", "w185", "w342", "w500", "w780", "original"
// "profile_sizes": "w45", "w185", "h632", "original"

export const IMAGES_URL = 'https://image.tmdb.org/t/p/';
const cache = new Map();
const LANGUAGE = 'en-US';

export const abortController = new AbortController();

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTMxNDhmYjNlMjk2YmI3YmM0MGQyZjkzMDg2NWUyYSIsInN1YiI6IjYxMmJkOWRlNDJmMTlmMDA0MjllYzRlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qUcOqubdlFiw4Vo4XJp8VttB73h6Ocj7p2Hqc1K-jGE',
  },
});

export async function searchMovies(query, page = 1, language = LANGUAGE) {
  try {
    const cacheKey = `search-movies-${query}-${page}-${language}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    const response = await instance.get('search/movie', {
      params: {
        query: query,
        include_adult: true,
        page: page,
        language: language,
      },
    });

    cache.set(cacheKey, response.data);

    return response.data;
  } catch (error) {
    console.log(error.massage);
  }
}

export async function getTrendingMovies(
  page = 1,
  language = LANGUAGE,
  timeWindow = 'day'
) {
  try {
    const cacheKey = `trending-movies-${timeWindow}-${page}-${language}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    const response = await instance.get(`trending/movie/${timeWindow}`, {
      params: {
        include_adult: true,
        page: page,
        language: language,
      },
    });

    cache.set(cacheKey, response.data);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

//Append To Response - movie detail если будет время посмотреть, прикольная штука
export async function getMovieDetails(movieId, language = LANGUAGE) {
  try {
    const cacheKey = `movie-details-${movieId}-${language}`;

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    const response = await instance.get(`movie/${movieId}`, {
      params: {
        language: language,
      },
    });
    
    cache.set(cacheKey, response.data);
    
    return response.data;
  } catch (error) {
    console.log(error.massage);
  }
}

export async function getMovieCredits(movieId, language = LANGUAGE) {
  try {
    const cacheKey = `movie-credits-${movieId}-${language}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    const response = await instance.get(`movie/${movieId}/credits`, {
      params: {
        language: language,
      },
    });

    cache.set(cacheKey, response.data);

    return response.data;
  } catch (error) {
    console.log(error.massage);
  }
}

export async function getMovieReviews(movieId, page = 1, language = LANGUAGE) {
  try {
    const response = await instance.get(`movie/${movieId}/reviews`, {
      params: {
        language: language,
        page: page,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error.massage);
  }
}


