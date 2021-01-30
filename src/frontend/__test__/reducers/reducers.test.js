import reducer from "../../reducers";
import PlanetMock from "../../__mocks__/PlanetMock";
import ACTION_TYPES from "../../constants/actionTypes";

describe("Reducers", () => {
  test("Return initial state", () => {
    expect(reducer({}, "")).toEqual({});
  });
  test(ACTION_TYPES.SET_PLANETS, () => {
    const initialState = {
      planets: [],
    };
    const payload = [PlanetMock];
    const action = {
      type: ACTION_TYPES.SET_PLANETS,
      payload,
    };
    const expected = {
      planets: [PlanetMock],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
  test(ACTION_TYPES.SET_LOADING, () => {
    const initialState = {
      loading: false,
    };
    const payload = true;
    const action = {
      type: ACTION_TYPES.SET_LOADING,
      payload,
    };
    const expected = {
      loading: true,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test(ACTION_TYPES.SET_ERROR, () => {
    const initialState = {
      error: false,
    };
    const payload = true;
    const action = {
      type: ACTION_TYPES.SET_ERROR,
      payload,
    };
    const expected = {
      error: true,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
