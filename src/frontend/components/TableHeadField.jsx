import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../actions";

import "../assets/styles/components/TableHeadField.styl";
import ORDER_TYPES from "../constants/orderTypes";

const TableHeadField = ({ name, value }) => {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state);
  const orderStates = [
    { type: ORDER_TYPES.ASC, icon: "⬆️" },
    { type: ORDER_TYPES.DESC, icon: "⬇️" },
  ];
  const [orderState, setOrderStatus] = useState(false);

  const toogleChangeOrder = () => {
    const orderStatesNames = orderStates.map((entry) => entry.type);
    const stateIndex = orderStatesNames.indexOf(orderState);
    let newOrder = false;
    if (stateIndex < orderStatesNames.length - 1)
      newOrder = orderStatesNames[stateIndex + 1];
    else {
      newOrder = orderStatesNames[0];
    }
    const orderFields = { ...order, [value]: newOrder };
    dispatch(setOrder(orderFields));
    setOrderStatus(newOrder);
  };

  const getOrderIcon = () => {
    const orderStateObj = orderStates.find(
      (entry) => entry.type === orderState
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
