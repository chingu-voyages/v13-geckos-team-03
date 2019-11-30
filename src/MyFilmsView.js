import React, { useState, useEffect } from "react";

import APIKEY from "./apikey.js";
import { BACKEND_URL } from "./config";

export default function() {
  const [userData, setUserData] = useState([]);
  const [filmData, setFilmData] = useState({});

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
      return;
    }
    const getFilmData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${userData[4].filmId}?api_key=${APIKEY}`
      );
      const data = await res.json();
      console.log(data);
    };
    getFilmData();
  }, [userData]);

  return (
    <div>
      <h1>My Films View</h1>
    </div>
  );
}
