import React from "react";
import { mount, shallow } from "enzyme";
import TableItem from "@/components/TableItem";
import PlanetMock from "@/__mocks__/PlanetMock";

describe("<TableItem/>", () => {
  const fields = [{ name: "Name", value: "name" }];

  test("TableItem component should render", () => {
    const tableItem = shallow(
      <TableItem fields={fields} planet={PlanetMock} />
    );
    expect(tableItem.length).toEqual(1);
  });

  test("Should show the correct value of the Planet", () => {
    const tableItem = mount(
      <table>
        <tbody>
          <TableItem fields={fields} planet={PlanetMock} />
        </tbody>
      </table>
    );
    expect(tableItem.find("td").text()).toEqual("Tatooine");
  });
});
