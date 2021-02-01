import React from "react";
import { shallow } from "enzyme";
import SelectFilterItem from "../../components/SelectFilterItem";
import FilterMock from "../../__mocks__/FilterMock";

describe("<SelectFilterItem/>", () => {
  const selectFilterItem = shallow(<SelectFilterItem {...FilterMock}  />);
  test("Filter component should render", () => {
    expect(selectFilterItem.length).toEqual(1);
  });
  test("Should create a select tag", () => {
    expect(selectFilterItem.find("select").exists()).toBeTruthy();
  });
});
