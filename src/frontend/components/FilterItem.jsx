import React from "react";
import FILTER_TYPES from "../constants/filterTypes";
import NumberRangeFilterItem from "./NumberRangeFilterItem";
import SelectFilterItem from "./SelectFilterItem";

const FilterItem = ({ filter, onChange, defaultValue, reset }) => {
  const handleChangeField = (newValue) => {
    onChange({ name: filter.value, value: newValue.trim() });
  };

  const getFilterElement = () => {
    switch (filter.type) {
      case FILTER_TYPES.SELECT:
        return (
          <SelectFilterItem
            onChange={handleChangeField}
            {...filter}
            defaultValue={defaultValue}
            reset={reset}
          />
        );
      case FILTER_TYPES.NUMBER_RANGE:
        return (
          <NumberRangeFilterItem
            onChange={handleChangeField}
            {...filter}
            defaultValue={defaultValue}
            reset={reset}
          />
        );
    }
  };

  return <>{getFilterElement()}</>;
};

export default FilterItem;
