import React from "react";
import SingleOrder from "./SingleOrder";

export default function OrdersTable({ orders }) {
  const singleOrderEls = orders.map((order) => {
    return <SingleOrder order={order} key={order.id} />;
  });
  return (
    <table className="order__table">
      <thead>
        <tr>
          <th>Order Number</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{singleOrderEls}</tbody>
    </table>
  );
}
