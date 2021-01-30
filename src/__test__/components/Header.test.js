import React from "react";
import { shallow } from "enzyme";
import Header from "@/components/Header";

describe("<Header/>", () => {
  const header = shallow(<Header />);
  test("Header component should render", () => {
    expect(header.length).toEqual(1);
  });
});
