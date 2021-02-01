import React, { useEffect, useState } from "react";
import "../assets/styles/components/NumberRangeFilterItem.styl";

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
    <div className="NumberRangeFilterItem">
      <label htmlFor={value}>{name}</label>
      <div className="NumberRangeFilterItem__rangeInput">
        <input
          id={value}
          type="range"
          min={min}
          max={max}
          value={selectedValue}
          onChange={handleChangeSelection}
        />
        <output
          className="NumberRangeFilterItem__rangeInput__output"
          htmlFor="range"
        >
          {selectedValue}
        </output>
      </div>
    </div>
  );
};

export default NumberRangeFilterItem;
