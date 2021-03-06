import {
  setPlanets,
  setLoading,
  setError,
  setLastQuery,
  setFilter,
  setOrder,
} from "../../actions";
import PlanetMock from "../../__mocks__/PlanetMock";
import ACTION_TYPES from "../../constants/actionTypes";

describe("Actions", () => {
  test("setPlanets Action", () => {
    const payload = PlanetMock;
    const expected = {
      type: ACTION_TYPES.SET_PLANETS,
      payload,
    };
    expect(setPlanets(payload)).toEqual(expected);
  });
  test("setLoading Action", () => {
    const payload = true;
    const expected = {
      type: ACTION_TYPES.SET_LOADING,
      payload,
    };
    expect(setLoading(payload)).toEqual(expected);
  });

  test("setError Action", () => {
    const payload = "Error";
    const expected = {
      type: ACTION_TYPES.SET_ERROR,
      payload,
    };
    expect(setError(payload)).toEqual(expected);
  });

  test("setLastQuery Action", () => {
    const payload = "/";
    const expected = {
      type: ACTION_TYPES.SET_LAST_QUERY,
      payload,
    };
    expect(setLastQuery(payload)).toEqual(expected);
  });

  test("setFilter Action", () => {
    const payload = {};
    const expected = {
      type: ACTION_TYPES.SET_FILTER,
      payload,
    };
    expect(setFilter(payload)).toEqual(expected);
  });

  test("setOrder Action", () => {
    const payload = {};
    const expected = {
      type: ACTION_TYPES.SET_FILTER,
      payload,
    };
    expect(setFilter(payload)).toEqual(expected);
  });
});
