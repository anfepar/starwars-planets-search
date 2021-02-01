import React from "react";
import { mount, shallow } from "enzyme";
import TableHeadField from "../../components/TableHeadField";
import ProviderMock from "../../__mocks__/ProviderMock";

describe("<TableHeadField/>", () => {
  const name = "Name";

  test("TableHeadField component should render", () => {
    const tableHeadField = shallow(
      <ProviderMock>
        <TableHeadField name={name} />
      </ProviderMock>
    );
    expect(tableHeadField.length).toEqual(1);
  });

  test("Should create the field with the correct name", () => {
    const tableHeadField = mount(
      <ProviderMock>
        <table>
          <thead>
            <tr>
              <TableHeadField name={name} />
            </tr>
          </thead>
        </table>
      </ProviderMock>
    );

    expect(tableHeadField.find(".TableHeadField").text()).toEqual(name);
  });
});
