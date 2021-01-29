import React from "react";
import TableHeadField from "@/components/TableHeadField";

const TableHead = ({ fields }) => (
  <tr>
    {fields.map((field) => (
      <TableHeadField key={field.value} name={field.name} />
    ))}
  </tr>
);

export default TableHead;
