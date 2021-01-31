import axios from "axios";

export const API_URL = "https://swapi.dev/api";

export function getPlanets(query, limit, page) {
  let planetsEndpoint = `${API_URL}/planets`;
  query = query ? `search=${query}` : null;
  limit = limit ? `limit=${limit}` : null;
  page = page ? `page=${page}` : null;

  const parameters = [query, limit, page].filter(
    (parameter) => parameter !== null
  );

  const urlParameter = parameters.join("&");

  if (query || limit || page) {
    planetsEndpoint = `${planetsEndpoint}/?${urlParameter}`;
  }

  return axios(`${planetsEndpoint}`, {
    method: "GET",
  })
    .then((response) => response.data.results)
    .catch((error) => {
      throw new Error(error);
    });
}
