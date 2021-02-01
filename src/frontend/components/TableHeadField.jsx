import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../actions";

import "../assets/styles/components/TableHeadField.styl";

const TableHeadField = ({ name, value }) => {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state);
  const orderStates = [
    { name: "asc", icon: "⬆️" },
    { name: "desc", icon: "⬇️" },
  ];
  const [orderState, setOrderStatus] = useState(false);

  const toogleChangeOrder = () => {
    const orderStatesNames = orderStates.map((entry) => entry.name);
    const stateIndex = orderStatesNames.indexOf(orderState);
    let newOrder = false;
    if (stateIndex < orderStatesNames.length - 1)
      newOrder = orderStatesNames[stateIndex + 1];
    setOrderStatus(newOrder);
    let orderFields = order;
    if (newOrder) orderFields = { ...orderFields, [value]: newOrder };
    else delete orderFields[value];
    dispatch(setOrder(orderFields));
  };

  const getOrderIcon = () => {
    const orderStateObj = orderStates.find(
      (entry) => entry.name === orderState
    );
    return orderStateObj ? orderStateObj.icon : "";
  };

  return (
    <th onClick={toogleChangeOrder} className="TableHeadField">
      {orderState ? `${name} ${getOrderIcon()}` : name}
    </th>
  );
};
export default TableHeadField;
