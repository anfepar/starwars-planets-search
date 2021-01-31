import React from "react";
import FILTER_TYPES from "../constants/filterTypes";
import FilterItem from "../components/FilterItem";
import {
  getAttributeValues,
  getMinOfAttribute,
  getMaxOfAttribute,
} from "../utils/jsonUtilities";

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
  return (
    <section>
      {filters.map((filter) => (
        <FilterItem key={filter.value} filter={filter} />
      ))}
    </section>
  );
};

export default Filter;
