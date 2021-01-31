import React, { useEffect, useState } from "react";

const SelectFilterItem = ({ value, name, data, onChange }) => {
  const handleChangeSelection = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label htmlFor={value}>{name}</label>
      <select onChange={handleChangeSelection} name={name} id={value}>
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
