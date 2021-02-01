import React from "react";
import { shallow } from "enzyme";
import NumberRangeFilterItem from "../../components/NumberRangeFilterItem";
import FilterMock from "../../__mocks__/FilterMock";

describe("<NumberRangeFilterItem/>", () => {
  const numberRangeFilterItem = shallow(
    <NumberRangeFilterItem {...FilterMock} />
  );
  test("NumberRangeFilterItem component should render", () => {
    expect(numberRangeFilterItem.length).toEqual(1);
  });
  test("Should create a input tag", () => {
    expect(numberRangeFilterItem.find("input").exists()).toBeTruthy();
  });
});
