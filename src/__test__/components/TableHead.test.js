import React from "react";
import { mount, shallow } from "enzyme";
import TableHead from "@/components/TableHead";

describe("<TableHead/>", () => {
  const fields = [{ name: "Name", value: "name" }];

  test("TableHead component should render", () => {
    const tableHead = shallow(
      <table>
        <thead>
          <TableHead fields={fields} />
        </thead>
      </table>
    );
    expect(tableHead.length).toEqual(1);
  });

  test("Should create the field with the correct name", () => {
    const tableHead = mount(
      <table>
        <thead>
          <TableHead fields={fields} />
        </thead>
      </table>
    );

    expect(tableHead.find("TableHeadField").text()).toEqual(fields[0].name);
  });
});
