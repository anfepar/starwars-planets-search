import React from "react";
import { mount, shallow } from "enzyme";
import TableHeadField from "../../components/TableHeadField";

describe("<TableHeadField/>", () => {
  const name = "Name";

  test("TableHeadField component should render", () => {
    const tableHeadField = shallow(<TableHeadField name={name} />);
    expect(tableHeadField.length).toEqual(1);
  });

  test("Should create the field with the correct name", () => {
    const tableHeadField = mount(
      <table>
        <thead>
          <tr>
            <TableHeadField name={name} />
          </tr>
        </thead>
      </table>
    );

    expect(tableHeadField.find(".TableHeadField").text()).toEqual(name);
  });
});
