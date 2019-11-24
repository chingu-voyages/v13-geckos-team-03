import APIKEY from '../../apikey.js';
import { BACKEND_URL } from '../../config';

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

}

export const signup = async data => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/signup`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    res.json().then(data => console.log(data))
  } catch (err) {
    console.log(err)
  }
}

