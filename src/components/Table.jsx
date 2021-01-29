import React from "react";
import { useSelector } from "react-redux";
import STRINGS from "@/constants/strings";
import TableHead from "@/components/TableHead";
import TableItem from "@/components/TableItem";
import "@/assets/styles/components/Table.styl";

const Table = () => {
  const { loading, planets, error } = useSelector((state) => state);
  const fields = [
    { name: STRINGS.TABLE.NAME, value: "name" },
    { name: STRINGS.TABLE.TERRAIN, value: "terrain" },
    { name: STRINGS.TABLE.CLIMATE, value: "climate" },
    { name: STRINGS.TABLE.POPULATION, value: "population" },
    { name: STRINGS.TABLE.DIAMETER, value: "diameter" },
  ];
  return (
    <>
      {loading ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>error</p>
      ) : (
        <table className="Table">
          <thead>
            <TableHead fields={fields} />
          </thead>
          <tbody>
            {planets &&
              planets.map((planet) => (
                <TableItem key={planet.name} planet={planet} fields={fields} />
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
