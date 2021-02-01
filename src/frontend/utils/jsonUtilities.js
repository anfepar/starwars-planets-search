export function getAttributeValues(jsonArray, attributeName, splitBy = false) {
  const reducer = (accumulator, currentValue) => {
    let attributeValues = currentValue[attributeName];
    let result = accumulator;
    if (attributeValues) {
      if (splitBy) {
        attributeValues = attributeValues.split(splitBy);
        if (!attributeValues.some((value) => accumulator.indexOf(value) >= 0)) {
          result = [...result, ...attributeValues];
        }
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

const getAttributeNumberValues = (jsonArray, attributeName) => {
  return jsonArray
    ? jsonArray
        .map((entry) => parseInt(entry[attributeName]))
        .filter((value) => !isNaN(value))
    : null;
};
