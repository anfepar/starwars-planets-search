import React from "react";

const SelectFilterItem = ({ value, name, data }) => {
  return (
    <>
      <label htmlFor={value}>{name}</label>
      <select name={name} id={value}>
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
