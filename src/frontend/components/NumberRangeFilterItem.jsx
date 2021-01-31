import React from "react";

const NumberRangeFilterItem = ({ value, name, min, max, defaultValue }) => {
  return (
    <>
      <label htmlFor={value}>{name}</label>
      <input
        id={value}
        type="range"
        min={min}
        max={max}
        value={defaultValue}
      />
      <output htmlFor="range">{}</output>
    </>
  );
};

export default NumberRangeFilterItem;
