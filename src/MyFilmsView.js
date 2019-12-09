import React, { useState, useEffect } from "react";
import Results from "./Components/Results/Results";

import APIKEY from "./apikey.js";
import { BACKEND_URL } from "./config";

export default function() {
  const [userData, setUserData] = useState([]); // for storing the film ids of the films the user has favourited
  const [filmData, setFilmData] = useState([]); // for storing the film data of the films the user has favourited

  // get the films that the user have favourited from the server
  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch(`${BACKEND_URL}/api/user-film-meta`, {
        method: "GET",
        credentials: "include"
      });
      const data = await res.json();
      setUserData(data.docs);
    };
    fetchUserData();
  }, []);

  // fetch data on the films (the user have favourited) from the API and put it in state
  useEffect(() => {
    if (userData.length === 0) {
      // ignore this useEffect if nothing has been returned from the server (ie no favourited films or userData hasn't been updated yet)
      return;
    }

    const fetchFilmData = async () => {
      // loop through all the favourited films, call the API using the film ID and save it in filmData state
      for (let i = 0; i < userData.length; i++) {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${userData[i].filmId}?api_key=${APIKEY}`
        );
        const data = await res.json();
        setFilmData(prevData => [...prevData, data]);
      }
    };

    fetchFilmData();
  }, [userData]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Films</h1>
      {filmData && <Results searchResults={filmData} />}
    </div>
  );
}
