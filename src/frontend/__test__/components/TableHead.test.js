import React from "react";
import { mount, shallow } from "enzyme";
import TableHead from "../../components/TableHead";
import ProviderMock from "../../__mocks__/ProviderMock";

describe("<TableHead/>", () => {
  const fields = [{ name: "Name", value: "name" }];

  test("TableHead component should render", () => {
    const tableHead = shallow(
      <ProviderMock>
        <table>
          <thead>
            <TableHead fields={fields} />
          </thead>
        </table>
      </ProviderMock>
    );
    expect(tableHead.length).toEqual(1);
  });

  test("Should create the field with the correct name", () => {
    const tableHead = mount(
      <ProviderMock>
        <table>
          <thead>
            <TableHead fields={fields} />
          </thead>
        </table>
      </ProviderMock>
    );

    expect(tableHead.find("TableHeadField").text()).toEqual(fields[0].name);
  });
});
