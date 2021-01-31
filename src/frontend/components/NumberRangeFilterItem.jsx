import React, { useEffect, useState } from "react";

const NumberRangeFilterItem = ({
  value,
  name,
  min,
  max,
  defaultValue,
  onChange,
  reset,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const handleChangeSelection = (e) => {
    setSelectedValue(e.target.value);
    onChange(e.target.value);
  };

  useEffect(() => {
    if (reset) setSelectedValue(undefined);
  }, [reset]);

  return (
    <>
      <label htmlFor={value}>{name}</label>
      <input
        id={value}
        type="range"
        min={min}
        max={max}
        value={selectedValue}
        onChange={handleChangeSelection}
      />
      <output htmlFor="range">{selectedValue}</output>
    </>
  );
};

export default NumberRangeFilterItem;
