import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FilterItem from "../components/FilterItem";
import { searchToJson, jsonToSearch } from "../utils/urlUtilities";
import STRINGS from "../constants/strings";
import FILTERS from "../constants/filters";
import "../assets/styles/components/Filter.styl";

const Filter = ({ planets, filter }) => {
  const filters = FILTERS(planets);
  let history = useHistory();
  const [filterValues, setFilterValues] = useState({});
  const [filtersReset, setFiltersReset] = useState(false);

  const handleFilterChange = (filterValue) => {
    const newValue = filterValue.value;
    const newFilter = { [filterValue.name]: newValue };
    applyFilter(newFilter);
    if (filtersReset) setFiltersReset(false);
    setFilterValues({ ...filterValues, ...newFilter });
  };

  const applyFilter = (newFilter) => {
    const currentLocation = history.location;
    if (currentLocation) {
      const currentSearchParams = currentLocation.search
        ? searchToJson(currentLocation.search)
        : {};

      const resultPath = jsonToSearch({
        ...currentSearchParams,
        ...filterValues,
        ...newFilter,
      });
      history.push(resultPath);
    }
  };

  const handleResetFilter = () => {
    const currentLocation = history.location;
    if (currentLocation) {
      let resultPath = "/";
      if (currentLocation.search) {
        let resultParamsObj = searchToJson(currentLocation.search);
        Object.keys(resultParamsObj).forEach((key) => {
          if (key !== "q") delete resultParamsObj[key];
        });
        resultPath = jsonToSearch(resultParamsObj);
      }
      setFilterValues({});
      history.push(resultPath);
    }
    setFiltersReset(true);
  };

  return (
    <form className="Filter">
      {filters.map((filterObj) => (
        <FilterItem
          onChange={handleFilterChange}
          key={filterObj.value}
          filter={filterObj}
          defaultValue={filter ? filter[filterObj.value] : undefined}
          reset={filtersReset}
        />
      ))}
      <button className="Filter__button" type="reset" onClick={handleResetFilter}>
        {STRINGS.FILTER.CLEAR_BUTTON}
      </button>
    </form>
  );
};

export default Filter;
