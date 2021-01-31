import React from "react";
import { mount, shallow } from "enzyme";
import Table from "../../components/Table";
import ProviderMock from "../../__mocks__/ProviderMock";
import PlanetMock from "../../__mocks__/PlanetMock";
import * as redux from "react-redux";

describe("<Table/>", () => {
  const spy = jest.spyOn(redux, "useSelector");
  beforeAll(() => {
    spy.mockReturnValue({ planets: [PlanetMock] });
  });
  test("Table component should render", () => {
    const table = shallow(
      <ProviderMock>
        <Table />
      </ProviderMock>
    );
    expect(table.length).toEqual(1);
  });

  test("Should show Planets", () => {
    const table = mount(
      <ProviderMock>
        <Table />
      </ProviderMock>
    );
    expect(table.find("TableItem").exists()).toBeTruthy();
  });

  test("Should show Loading message", () => {
    spy.mockReturnValue({ loading: true });
    const table = mount(
      <ProviderMock>
        <Table />
      </ProviderMock>
    );
    expect(table.find(".Loading").exists()).toBeTruthy();
  });

  test("Should show Error message", () => {
    spy.mockReturnValue({ error: "Error" });
    const table = mount(
      <ProviderMock>
        <Table />
      </ProviderMock>
    );
    expect(table.find(".Error").exists()).toBeTruthy();
  });
});
