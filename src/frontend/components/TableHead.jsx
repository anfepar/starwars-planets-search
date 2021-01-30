import React from "react";
import TableHeadField from "../components/TableHeadField";
import "../assets/styles/components/TableHead.styl"

const TableHead = ({ fields }) => (
  <tr className="TableHead">
    {fields.map((field) => (
      <TableHeadField key={field.value} name={field.name} />
    ))}
  </tr>
);

export default TableHead;
