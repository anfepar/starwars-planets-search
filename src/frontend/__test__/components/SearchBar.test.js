import React from "react";
import { mount } from "enzyme";
import SearchBar from "../../components/SearchBar";
import { MemoryRouter } from "react-router-dom";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("<SearchBar/>", () => {
  const searchBar = mount(
    <MemoryRouter>
      <SearchBar />
    </MemoryRouter>
  );
  test("SearchBar component should render", () => {
    expect(searchBar.length).toEqual(1);
  });

  test("Searchbar button should change the url", () => {
    const planet = "Tatooine";
    searchBar.find("input").simulate("change", { target: { value: planet } });
    searchBar.find("button").simulate("click");
    expect(mockHistoryPush).toHaveBeenCalledWith(`?q=${planet}`);
  });

  test("Enter key should change the url", () => {
    const planet = "Tatooine";
    searchBar.find("input").simulate("change", { target: { value: planet } });
    searchBar.find("input").simulate("keypress", { key: "Enter" });
    expect(mockHistoryPush).toHaveBeenCalledWith(`?q=${planet}`);
  });
});
