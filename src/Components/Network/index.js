import APIKEY from "../../apikey.js";

import xawf from "./xawf";

export const searchFilmTitle = async (value, currentPage) => {
  const searchText = value.replace(/ /, "+");
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=${APIKEY}&language=en-US&page=${currentPage}&include_adult=false`
    );
    const data = await res.json();
    const { total_pages, results } = data;
    return { total_pages, results };
  } catch (err) {
    console.error(err);
  }
};

export const signup = async formData => {
  const data = await xawf.POST("/signup", formData);
  return data;
};

export const login = async formData => {
  const data = await xawf.POST("/login", formData);
  return data;
};

export const requestLogout = async () => {
  const data = await xawf.GET("/logout");
  return data;
};

export const pingUser = async () => {
  const data = await xawf.GET("/user");
  return data;
};

export const getMeta = async () => {
  const data = await xawf.GET("/user-film-meta");
  return data;
};

export const createHeart = async filmId => {
  const data = await xawf.POST("/user-film-meta", {
    filmId
  });
  return data;
}

export const deleteHeart = async docId => {
  const data = await xawf.DELETE("/user-film-meta", {
    docId
  });
  return data;
}