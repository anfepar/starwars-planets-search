import ACTION_TYPES from "../constants/actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_PLANETS:
      return {
        ...state,
        planets: action.payload,
      };
    case ACTION_TYPES.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ACTION_TYPES.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ACTION_TYPES.SET_LAST_QUERY:
      return {
        ...state,
        lastQuery: action.payload,
      };
    case ACTION_TYPES.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
