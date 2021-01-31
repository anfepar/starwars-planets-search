import FILTER_TYPES from "./filterTypes";
import {
  getAttributeValues,
  getMinOfAttribute,
  getMaxOfAttribute,
} from "../utils/jsonUtilities";

const FILTERS = (planets) => [
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

export default FILTERS;
