import React from "react";

const TableItem = ({ planet, fields }) => (
  <tr>
    {fields.map((field) => (
      <th key={field.value}>{planet[field.value]}</th>
    ))}
  </tr>
);

export default TableItem;
