import React, { useEffect, useState } from "react";

const NumberRangeFilterItem = ({
  value,
  name,
  min,
  max,
  defaultValue,
  onChange,
}) => {

  const handleChangeSelection = (e) => {
    onChange(e.target.value);
  };
  return (
    <>
      <label htmlFor={value}>{name}</label>
      <input
        id={value}
        type="range"
        min={min}
        max={max}
        value={defaultValue}
        onChange={handleChangeSelection}
      />
      <output htmlFor="range">{}</output>
    </>
  );
};

export default NumberRangeFilterItem;
