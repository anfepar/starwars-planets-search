import ORDER_TYPES from "../constants/orderTypes";

export function getAttributeValues(jsonArray, attributeName, splitBy = false) {
  const reducer = (accumulator, currentValue) => {
    let attributeValues = currentValue[attributeName];
    let result = accumulator;
    if (attributeValues) {
      if (splitBy) {
        attributeValues = attributeValues.split(splitBy).forEach((value) => {
          if (accumulator.indexOf(value) === -1) {
            result = [...result, value];
          }
        });
      } else {
        if (accumulator.indexOf(attributeValues) === -1) {
          result.push(attributeValues);
        }
      }
    }
    return result;
  };

  return jsonArray ? jsonArray.reduce(reducer, []) : null;
}

export function getMinOfAttribute(jsonArray, attributeName) {
  const numberValues = getAttributeNumberValues(jsonArray, attributeName);
  return Math.min.apply(null, numberValues);
}

export function getMaxOfAttribute(jsonArray, attributeName) {
  const numberValues = getAttributeNumberValues(jsonArray, attributeName);
  return Math.max.apply(null, numberValues);
}

export function orderJsonByAtribute(jsonArray, attributeName, type) {
  if (!type) return jsonArray;
  else {
    return jsonArray.sort((entry1, entry2) => {
      const value1 = entry1[attributeName].trim();
      const value2 = entry2[attributeName].trim();
      let orderIndex = 0;
      if (value1 < value2) {
        switch (type) {
          case ORDER_TYPES.ASC:
            orderIndex = -1;
            break;
          case ORDER_TYPES.DESC:
            orderIndex = 1;
        }
      } else if (value1 > value2) {
        switch (type) {
          case ORDER_TYPES.ASC:
            orderIndex = 1;
            break;
          case ORDER_TYPES.DESC:
            orderIndex = -1;
        }
      }
      return orderIndex;
    });
  }
}
const getAttributeNumberValues = (jsonArray, attributeName) => {
  return jsonArray
    ? jsonArray
        .map((entry) => parseInt(entry[attributeName]))
        .filter((value) => !isNaN(value))
    : null;
};
