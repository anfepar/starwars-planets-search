import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPlanets } from "@/utils/swapiAPI";
import { setError, setLoading, setPlanets } from "@/actions";

const useGetPlanets = (location) => {
  const dispatch = useDispatch();
  const { limitPerPage, pageNumber } = useSelector((state) => state);

  useEffect(() => {
    {
      dispatch(setLoading(true));
      const query = location.search ? location.search.split("q=")[1] : null;
      getPlanets(query, limitPerPage, pageNumber)
        .then((planets) => {
          dispatch(setLoading(false));
          dispatch(setPlanets(planets));
        })
        .catch((error) => dispatch(setError(error)));
    }
  }, [location]);
};

export default useGetPlanets;
