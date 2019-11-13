import { APIKEY } from '../../apikey';

export const getConfig = async () => {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${APIKEY}`);
    const data = await res.json();
    console.log(data)
    const { secure_base_url, poster_sizes, backdrop_sizes } = data.images;
    updateConfig({
      secure_base_url,
      backdrop_sizes,
      poster_sizes
    })
  } catch (err) {
    console.error(err);
  }
};

export const searchFilm = async () => {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=lethal+weapon&api_key=${APIKEY}&language=en-US&page=1&include_adult=false`);
    const data = await res.json();
    const { results } = data;
    console.log(results)
    updateResults(results)
  } catch (err) {
    console.error(err);
  }
}  