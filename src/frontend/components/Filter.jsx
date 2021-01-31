import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FILTER_TYPES from "../constants/filterTypes";
import FilterItem from "../components/FilterItem";
import { searchToJson, jsonToSearch } from "../utils/urlUtilities";
import {
  getAttributeValues,
  getMinOfAttribute,
  getMaxOfAttribute,
} from "../utils/jsonUtilities";
import STRINGS from "../constants/strings";

const Filter = ({ planets }) => {
  const filters = [
    {
      name: "Terreno",
      value: "terrain",
      type: FILTER_TYPES.SELECT,
      data: getAttributeValues(planets, "terrain", ","),
    },
    {
      name: "Clima",
      value: "climate",
      type: FILTER_TYPES.SELECT,
      data: getAttributeValues(planets, "climate", ","),
    },
    {
      name: "Población",
      value: "population",
      type: FILTER_TYPES.NUMBER_RANGE,
      min: getMinOfAttribute(planets, "population"),
      max: getMaxOfAttribute(planets, "population"),
    },
    {
      name: "Diametro",
      value: "diameter",
      type: FILTER_TYPES.NUMBER_RANGE,
      min: getMinOfAttribute(planets, "diameter"),
      max: getMaxOfAttribute(planets, "diameter"),
    },
  ];

  let history = useHistory();
  const [filterValues, setFilterValues] = useState({});

  const handleFilterChange = (filterValue) => {
    let newValue = encodeURIComponent(filterValue.value);
    setFilterValues({ ...filterValues, [filterValue.name]: newValue });
  };

  const handleSumbitFilter = (e) => {
    e.preventDefault();
    const currentLocation = history.location;
    if (currentLocation) {
      const currentSearchParams = currentLocation.search
        ? searchToJson(currentLocation.search)
        : {};
      const resultPath = jsonToSearch({
        ...currentSearchParams,
        ...filterValues,
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
  };

  return (
    <form>
      {filters.map((filter) => (
        <FilterItem
          onChange={handleFilterChange}
          key={filter.value}
          filter={filter}
        />
      ))}
      <button type="submit" onClick={handleSumbitFilter}>
        {STRINGS.FILTER.APPLY_BUTTON}
      </button>
      <button type="reset" onClick={handleResetFilter}>
        {STRINGS.FILTER.CLEAR_BUTTON}
      </button>
    </form>
  );
};

export default Filter;
