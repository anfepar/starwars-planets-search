import React, { useEffect, useState } from "react";
import STRINGS from "../constants/strings";

const SelectFilterItem = ({
  value,
  name,
  data,
  defaultValue,
  onChange,
  reset,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleChangeSelection = (e) => {
    const newValue = e.target.value;
    if (newValue && newValue !== "default") {
      setSelectedValue(newValue);
      onChange(newValue);
    }
  };

  useEffect(() => {
    if (reset) setSelectedValue(undefined);
  }, [reset]);

  return (
    <>
      <label htmlFor={value}>{name}</label>
      <select
        onChange={handleChangeSelection}
        name={name}
        id={value}
        value={selectedValue}
      >
        <option value="default">{STRINGS.FILTER.DEFAULT_SELECT}</option>
        {data &&
          data.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </>
  );
};

export default SelectFilterItem;
