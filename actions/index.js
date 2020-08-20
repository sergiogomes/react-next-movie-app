import axios from "axios";

const environment = "prod";

const dev = {
  url: "http://localhost:3000",
};
const prod = {
  url: "https://api.themoviedb.org/3",
  api_key: "073df7ab63d2a00bc00f800c2f00b9cf",
  language: "en-US",
};

//https://api.themoviedb.org/3/genre/movie/list?api_key=073df7ab63d2a00bc00f800c2f00b9cf&language=en-US
// "/genre/movie/list"
// "?api_key="
// "&language=en-US";

// https://www.themoviedb.org/settings/api

// API Key (v3 auth)
// 073df7ab63d2a00bc00f800c2f00b9cf

// Example API Request
// https://api.themoviedb.org/3/movie/550?api_key=073df7ab63d2a00bc00f800c2f00b9cf

const MOVIE_DATA = [];

const CATEGORY_DATA = [
  {
    id: 0,
    name: "All",
  },
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

// export const getCategories = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       try {
//         resolve(CATEGORY_DATA);
//       } catch (error) {
//         reject(`Cannot fetch data: ${error}`);
//       }
//     }, 200);
//   });
// };

export const getCategories = () => {
  if (environment === "prod") {
    return axios
      .get(
        `${prod.url}/genre/movie/list?api_key=${prod.api_key}&language=${prod.language}`
      )
      .then((res) => {
        const categories = [{ id: 0, name: "All" }];
        categories.push(...res.data.genres);
        return categories;
      })
      .catch((error) => {
        console.error("getCategories", error);
      });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(CATEGORY_DATA);
        } catch (error) {
          reject(`Cannot fetch data: ${error}`);
        }
      }, 200);
    });
  }
};

export const getMovies = (page = 1) => {
  if (environment === "prod") {
    return axios
      .get(
        `${prod.url}/movie/popular?api_key=${prod.api_key}&language=${prod.language}&page=${page}`
      )
      .then((res) => {
        return res.data.results;
      })
      .catch((error) => {
        console.error("getMovies", error);
      });
  } else {
    return axios.get(`${dev.url}/api/v1/movies`).then((res) => {
      return res.data.results;
    });
  }
};

export const createMovie = (movie) => {
  movie.id = Math.random().toString(36).substr(2, 7);
  return axios.post(`${dev.url}/api/v1/movies`, movie).then((res) => {
    return res.data;
  });
};

export const getMovieById = (id) => {
  return axios.get(`${dev.url}/api/v1/movies/${id}`).then((res) => {
    return res.data;
  });
};

export const updateMovie = (movie) => {
  return axios
    .patch(`${dev.url}/api/v1/movies/${movie.id}`, movie)
    .then((res) => {
      return res.data;
    });
};

export const deleteMovie = (id) => {
  return axios.delete(`${dev.url}/api/v1/movies/${id}`).then((res) => {
    return res.data;
  });
};
