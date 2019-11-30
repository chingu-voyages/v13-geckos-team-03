import React, { useState, useEffect } from "react";

import APIKEY from "./apikey.js";
import { BACKEND_URL } from "./config";

export default function() {
  const [userData, setUserData] = useState([]);
  const [filmData, setFilmData] = useState({});

  useEffect(() => {
    const getUserData = async () => {
      const res = await fetch(`${BACKEND_URL}/api/user-film-meta`, {
        method: "GET",
        credentials: "include"
      });
      const data = await res.json();
      setUserData(data.docs);
    };
    getUserData();
  }, []);

  useEffect(() => {
    const getFilmData = async id => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}`
      );
      const data = await res.json();

      setFilmData(data);
      //console.log(filmData);
    };
    getFilmData(944);
  }, []);

  return (
    <div>
      <h1>My Films View</h1>
      {filmData.original_title}
    </div>
  );
}
