import axios from "axios";

// const BASE_URL = "http://localhost:3000";
const BASE_URL = "https://react-next-movie-app.vercel.app";

const MOVIE_DATA = [];

const CATEGORY_DATA = [
  { id: "c-0", name: "all" },
  { id: "c-1", name: "drama" },
  { id: "c-2", name: "action" },
  { id: "c-3", name: "adventure" },
  { id: "c-4", name: "historical" },
  { id: "c-5", name: "musical" },
];

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(CATEGORY_DATA);
      } catch (error) {
        reject(`Cannot fetch data: ${error}`);
      }
    }, 200);
  });
};

export const getMovies = () => {
  return axios.get(`${BASE_URL}/api/v1/movies`).then((res) => {
    return res.data;
  });
};

export const createMovie = (movie) => {
  movie.id = Math.random().toString(36).substr(2, 7);
  return axios.post(`${BASE_URL}/api/v1/movies`, movie).then((res) => {
    return res.data;
  });
};

export const getMovieById = (id) => {
  return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then((res) => {
    return res.data;
  });
};

export const updateMovie = (movie) => {
  return axios
    .patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
    .then((res) => {
      return res.data;
    });
};

export const deleteMovie = (id) => {
  return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then((res) => {
    return res.data;
  });
};
