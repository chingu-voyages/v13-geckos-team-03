import APIKEY from '../../apikey.js';

export const searchFilmTitle = async value => {
  const searchText = value.replace(/ /, "+");
  try {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=${APIKEY}&language=en-US&page=1&include_adult=false`);
    const data = await res.json();
    const { results } = data;
    return results;
  } catch (err) {
    console.error(err);
  }
}

export const signup = async data => {
  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}