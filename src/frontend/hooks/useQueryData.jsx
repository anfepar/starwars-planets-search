import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPlanets } from "../utils/swapiAPI";
import { searchToJson } from "../utils/urlUtilities";
import {
  setError,
  setLoading,
  setPlanets,
  setLastQuery,
  setFilter,
} from "../actions";

const useQueryData = (location) => {
  const dispatch = useDispatch();
  const { planets, limitPerPage, pageNumber, lastQuery } = useSelector(
    (state) => state
  );
  const queryApi = (query) => {
    if ((query || "/") !== lastQuery) {
      dispatch(setLoading(true));
      dispatch(setLastQuery(query || "/"));
      getPlanets(query, limitPerPage, pageNumber)
        .then((planets) => {
          dispatch(setLoading(false));
          dispatch(setPlanets(planets));
        })
        .catch((error) => {
          dispatch(setLoading(false));
          dispatch(setError(true));
        });
    }
  };

  useEffect(() => {
    {
      if (location.search) {
        let resultParamsObj = searchToJson(location.search);
        if (resultParamsObj.q) {
          queryApi(resultParamsObj.q);
          delete resultParamsObj.q;
        } else if (!planets.length) {
          queryApi();
        }
        dispatch(setFilter(resultParamsObj));
      } else {
        queryApi();
      }
    }
  }, [location]);
};

export default useQueryData;
