import React from "react";

export default function SingleOrder({ order }) {
  return (
    <tr>
      <td> {order.id}</td>
      <td>{order.created}</td>
      <td>{order.status}</td>
    </tr>
  );
}
