import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "./config";

export default function() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const res = await fetch(`${BACKEND_URL}/api/user-film-meta`, {
        method: "GET",
        credentials: "include"
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);
    };
    getUserData();
  }, []);

  return (
    <div>
      <h1>My Films View</h1>
    </div>
  );
}
