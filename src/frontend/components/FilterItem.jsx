import React from "react";
import FILTER_TYPES from "../constants/filterTypes";
import NumberRangeFilterItem from "./NumberRangeFilterItem";
import SelectFilterItem from "./SelectFilterItem";

const FilterItem = ({ filter }) => {
  const getFilterElement = () => {
    switch (filter.type) {
      case FILTER_TYPES.SELECT:
        return <SelectFilterItem { ...filter } />;
      case FILTER_TYPES.NUMBER_RANGE:
        return <NumberRangeFilterItem { ...filter } />;
    }
  };

  return <>{getFilterElement()}</>;
};

export default FilterItem;
