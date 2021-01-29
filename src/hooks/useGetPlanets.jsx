import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPlanetsByQuery } from "@/utils/swapiAPI";
import { setError, setLoading, setPlanets } from "@/actions";

const useGetPlanets = (location) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (location.search) {
      dispatch(setLoading(true));
      const query = location.search.split("q=")[1];
      getPlanetsByQuery(query)
        .then((planets) => {
          dispatch(setLoading(false));
          dispatch(setPlanets(planets));
        })
        .catch((error) => dispatch(setError(error)));
    }
  }, [location]);
};

export default useGetPlanets;
