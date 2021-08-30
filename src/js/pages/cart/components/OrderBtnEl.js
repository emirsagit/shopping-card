import React, { useContext } from "react";
import { ThemeContext } from "../../../data/ThemeContext";

export default function OrderBtnEl({ totalPrice }) {
  const { convertToCurrency, placeOrder, ordering } = useContext(ThemeContext);
  return (
    <div className="cart__order cart__grid section-width">
      <p className="cart__total">Total: {convertToCurrency(totalPrice)}</p>
      <div className="cart__button">
        <button className="form__button" onClick={placeOrder} disabled={ordering}>
          {ordering ? "Ordering..." : "Place Order"}
        </button>
      </div>
    </div>
  );
}
