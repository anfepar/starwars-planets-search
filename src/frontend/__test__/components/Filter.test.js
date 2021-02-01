import React from "react";
import {  shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Filter from "../../components/Filter";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("<Filter/>", () => {
  const filter = shallow(
    <MemoryRouter>
      <Filter />
    </MemoryRouter>
  );
  test("Filter component should render", () => {
    expect(filter.length).toEqual(1);
  });
});
