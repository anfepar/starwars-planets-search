import React from "react";
import "../assets/styles/components/TableItem.styl";

const TableItem = ({ planet, fields }) => (
  <tr className="TableItem">
    {fields.map((field) => (
      <td key={field.value}>{planet[field.value]}</td>
    ))}
  </tr>
);

export default TableItem;
