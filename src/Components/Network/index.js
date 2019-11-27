import APIKEY from "../../apikey.js";
import { BACKEND_URL } from "../../config";

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
  console.log(formData);
  const data = await xawf.POST("/signup", formData);
  return data;
};

export const login = async formData => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    if (res.status !== 200) {
      return {
        errors: [...data.errors]
      };
    }
    return data;
  } catch (err) {
    console.error(err);
    return {
      errors: ["something went wrong!"]
    };
  }
};

export const requestLogout = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/logout`, {
      method: "GET",
      credentials: "include"
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return new Error(err);
  }
};

export const pingUser = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/user`, {
      method: "GET",
      credentials: "include"
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getMeta = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/user-film-meta`, {
      method: "GET",
      credentials: "include"
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
