import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import STRINGS from "../constants/strings";
import TableHead from "../components/TableHead";
import TableItem from "../components/TableItem";
import Filter from "../components/Filter";
import useFilterData from "../hooks/useFilterData";
import "../assets/styles/components/Table.styl";

const Table = () => {
  const { loading, planets, error } = useSelector((state) => state);
  const fields = [
    { name: STRINGS.TABLE.NAME, value: "name" },
    { name: STRINGS.TABLE.TERRAIN, value: "terrain" },
    { name: STRINGS.TABLE.CLIMATE, value: "climate" },
    { name: STRINGS.TABLE.POPULATION, value: "population" },
    { name: STRINGS.TABLE.DIAMETER, value: "diameter" },
  ];
  const data = useFilterData();
  
  return (
    <>
      {loading ? (
        <p className="Loading">{STRINGS.TABLE.LOADING}</p>
      ) : error ? (
        <p className="Error">{STRINGS.TABLE.ERROR}</p>
      ) : (
        <>
          <Filter planets={planets} />
          <table className="Table">
            <thead>
              <TableHead fields={fields} />
            </thead>
            <tbody>
              {data &&
                data.map((planet) => (
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
