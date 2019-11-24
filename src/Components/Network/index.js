import APIKEY from "../../apikey.js";

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
