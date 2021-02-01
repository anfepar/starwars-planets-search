import ORDER_TYPES from "../../constants/orderTypes";
import {
  getAttributeValues,
  getMinOfAttribute,
  getMaxOfAttribute,
  orderJsonByAtribute,
} from "../../utils/jsonUtilities";

describe("JSON Utilities", () => {
  const json = [
    { name: "name2", value: "value2", num: 1 },
    { name: "name1", value: "value1,value2", num: 100 },
    { name: "name3", value: "value3,value2,value1", num: 23 },
  ];
  test("Should return a list of attribute values", () => {
    const expectedArray = ["value2", "value1", "value3"];
    const resultArray = getAttributeValues(json, "value", ",");
    expect(resultArray).toEqual(expectedArray);
  });

  test("Should return the minimum value of attribute values", () => {
    const minValue = getMinOfAttribute(json, "num", ",");
    expect(minValue).toEqual(1);
  });

  test("Should return the maximum value of attribute values", () => {
    const maxValue = getMaxOfAttribute(json, "num", ",");
    expect(maxValue).toEqual(100);
  });

  test("Should return a JSON order by atribute", () => {
    const expectedArray = [
      { name: "name1", value: "value1,value2", num: 100 },
      { name: "name2", value: "value2", num: 1 },
      { name: "name3", value: "value3,value2,value1", num: 23 },
    ];
    const resultArray = orderJsonByAtribute(json, "name", ORDER_TYPES.ASC);
    expect(resultArray).toEqual(expectedArray);
  });
});
