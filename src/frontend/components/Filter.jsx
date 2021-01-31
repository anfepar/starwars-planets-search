import React from "react";
import FILTER_TYPES from "../constants/filterTypes";
import FilterItem from "../components/FilterItem";

const Filter = () => {
  const filters = [
    {
      name: "Terreno",
      value: "terrain",
      type: FILTER_TYPES.SELECT,
      data: ["desert", "grasslands"],
    },
    {
      name: "Clima",
      value: "climate",
      type: FILTER_TYPES.SELECT,
      data: ["tempreature", "arid"],
    },
    {
      name: "Población",
      value: "population",
      type: FILTER_TYPES.NUMBER_RANGE,
      min: 50,
      max: 100,
    },
    {
      name: "Diametro",
      value: "diameter",
      type: FILTER_TYPES.NUMBER_RANGE,
      min: 50,
      max: 100,
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
