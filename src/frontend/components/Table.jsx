import React from "react";
import { useSelector } from "react-redux";
import STRINGS from "../constants/strings";
import TableHead from "../components/TableHead";
import TableItem from "../components/TableItem";
import Filter from "../components/Filter";
import "../assets/styles/components/Table.styl";
import useFilterData from "../hooks/useFilterData";
import { orderJsonByAtribute } from "../utils/jsonUtilities";

const Table = () => {
  const { loading, planets, error, filter, order } = useSelector(
    (state) => state
  );
  const fields = [
    { name: STRINGS.TABLE.NAME, value: "name" },
    { name: STRINGS.TABLE.TERRAIN, value: "terrain" },
    { name: STRINGS.TABLE.CLIMATE, value: "climate" },
    { name: STRINGS.TABLE.POPULATION, value: "population" },
    { name: STRINGS.TABLE.DIAMETER, value: "diameter" },
  ];
  const data = useFilterData(planets, filter);

  const renderData = () => {
    let orderedData = data;
    if (order && Object.keys(order).length) {
      for (let key in order) {
        orderedData = orderJsonByAtribute(data, key, order[key]);
      }
    }
    return orderedData;
  };

  return (
    <>
      {loading ? (
        <p className="Loading">{STRINGS.TABLE.LOADING}</p>
      ) : error ? (
        <p className="Error">{STRINGS.TABLE.ERROR}</p>
      ) : (
        <>
          <Filter planets={planets} filter={filter} />
          <table className="Table">
            <thead>
              <TableHead fields={fields} />
            </thead>
            <tbody>
              {data &&
                renderData().map((planet) => (
                  <TableItem
                    key={planet.name}
                    planet={planet}
                    fields={fields}
                  />
                ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Table;
