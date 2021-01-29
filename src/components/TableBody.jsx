import React from "react";
import TableItem from "@/components/TableItem";

const TableHead = ({ fields }) => {
  <tbody>
    <tr>
      {fields.map((field) => {
        <TableItem name={field.name} />;
      })}
    </tr>
  </tbody>;
};

export default TableHead;
