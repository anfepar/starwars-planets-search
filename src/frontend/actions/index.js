import ACTION_TYPES from "../constants/actionTypes";

export const setPlanets = (payload) => ({
  type: ACTION_TYPES.SET_PLANETS,
  payload,
});
export const setLoading = (payload) => ({
  type: ACTION_TYPES.SET_LOADING,
  payload,
});
export const setError = (payload) => ({
  type: ACTION_TYPES.SET_ERROR,
  payload,
});

export const setLastQuery = (payload) => ({
  type: ACTION_TYPES.SET_LAST_QUERY,
  payload,
});

export const setFilter = (payload) => ({
  type: ACTION_TYPES.SET_FILTER,
  payload,
});
