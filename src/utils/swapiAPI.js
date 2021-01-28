import axios from "axios";

const API_URL = "https://swapi.dev/api";

export function getPlanetsByQuery(query) {
  return axios(`${API_URL}/planets/?search=${query}`, {
    method: "GET",
  })
    .then((response) => response.data.results)
    .catch((error) => new Error(error));
}
