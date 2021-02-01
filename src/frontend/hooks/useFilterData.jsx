import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FILTERS from "../constants/filters";
import FILTER_TYPES from "../constants/filterTypes";

const useFilterData = () => {
  const { planets, filter } = useSelector((state) => state);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const filters = FILTERS(planets);
    if (filter && Object.keys(filter).length) {
      let filteredData = planets;
      for (const key in filter) {
        const filterObj = filters.find((filter) => filter.value === key);
          switch (filterObj.type) {
            case FILTER_TYPES.SELECT:
              filteredData = filteredData.filter((planet) =>
                planet[key].includes(filter[key])
              );
              break;
            case FILTER_TYPES.NUMBER_RANGE:
              filteredData = filteredData.filter((planet) => {
                const attrIntValue = parseInt(planet[key]);
                const filterValue = parseInt(filter[key]);
                return attrIntValue && filterValue
                  ? attrIntValue <= filterValue
                  : false;
              });
              break;
          }
      }
      setFilteredData(filteredData);
    } else {
      setFilteredData(planets);
    }
  }, [planets, filter]);

  return filteredData;
};

export default useFilterData;
