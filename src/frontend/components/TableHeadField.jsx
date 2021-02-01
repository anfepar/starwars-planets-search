import React, { useState } from "react";
import "../assets/styles/components/TableHeadField.styl";

const TableHeadField = ({ name }) => {
  const orderStates = ["asc", "desc"];
  const [order, setOrder] = useState(false);
  const toogleChangeOrder = () => {
    const stateIndex = orderStates.indexOf(order);
    if (stateIndex + 1 > 1) setOrder(false);
    setOrder(orderStates[stateIndex + 1]);
  };

  return (
    <th onClick={toogleChangeOrder} className="TableHeadField">
      {order ? (order === orderStates[0] ? `${name} ⬆️` : `${name} ⬇️`) : name}
    </th>
  );
};
export default TableHeadField;
