import { useState, useEffect } from "react";
import { getPlanetsByQuery } from "@/utils/swapiAPI";
const useGetTracks = (location) => {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    if (location.search) {
      const query = location.search.split("q=")[1];
      getPlanetsByQuery(query).then((planets) => {
        setPlanets(planets);
      });
    }
  }, [location]);
  return planets;
};

export default useGetTracks;
