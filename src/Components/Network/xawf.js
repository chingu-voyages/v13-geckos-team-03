import { BACKEND_URL } from "../../config";

const xawf = async (method, url, body) => {
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(body)
    };
    const res = await fetch(`${BACKEND_URL + "/api" + url}`, options);
    const data = await res.json();
    return data;
  } catch (err) {
    // Hits this with a cors error
    return {
      errors: ["fetch error!"]
    };
  }
};

export default {
  GET: (url, body) => xawf("GET", url, body),
  POST: (url, body) => xawf("POST", url, body),
  PUT: (url, body) => xawf("PUT", url, body),
  DELETE: (url, body) => xawf("DELETE", url, body)
};
