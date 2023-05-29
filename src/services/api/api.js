import axios from 'axios';

const cache = new Map();
const LANGUAGE = 'en-US';
//const cacheKey = `search-movies-${query}-${page}`;

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

    console.log('response.data', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
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
    console.log('cache', cache);
    console.log('response.data', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
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
    console.log('response.data', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
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
    console.log('response.data', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
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

    console.log('response.data', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
