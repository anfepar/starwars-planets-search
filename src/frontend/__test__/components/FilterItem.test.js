import React from "react";
import { mount, shallow } from "enzyme";
import FilterItem from "../../components/FilterItem";
import FilterMock from "../../__mocks__/FilterMock";

describe("<FilterItem/>", () => {
  test("FilterItem component should render", () => {
    const filterItem = shallow(<FilterItem filter={FilterMock}  />);
    expect(filterItem.length).toEqual(1);
  });
  test("Should render the correct filter item", () => {
    const filterItem = mount(<FilterItem filter={FilterMock} />);
    expect(filterItem.find("SelectFilterItem").exists()).toBeFalsy();
    expect(filterItem.find("NumberRangeFilterItem").exists()).toBeTruthy();
  });
});
