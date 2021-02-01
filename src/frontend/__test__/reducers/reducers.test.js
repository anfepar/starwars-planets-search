import reducer from "../../reducers";
import PlanetMock from "../../__mocks__/PlanetMock";
import FilterMock from "../../__mocks__/FilterMock";
import ACTION_TYPES from "../../constants/actionTypes";
import OrderMock from "../../__mocks__/OrderMock";

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

  test(ACTION_TYPES.SET_LAST_QUERY, () => {
    const initialState = {
      lastQuery: "",
    };
    const payload = "/";
    const action = {
      type: ACTION_TYPES.SET_LAST_QUERY,
      payload,
    };
    const expected = {
      lastQuery: "/",
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test(ACTION_TYPES.SET_FILTER, () => {
    const initialState = {
      filter: {},
    };
    const payload = FilterMock;
    const action = {
      type: ACTION_TYPES.SET_FILTER,
      payload,
    };
    const expected = {
      filter: FilterMock,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test(ACTION_TYPES.SET_ORDER, () => {
    const initialState = {
      order: {},
    };
    const payload = OrderMock;
    const action = {
      type: ACTION_TYPES.SET_ORDER,
      payload,
    };
    const expected = {
      order: OrderMock,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
