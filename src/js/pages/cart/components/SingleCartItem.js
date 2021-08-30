import React, { useContext } from "react";
import { ThemeContext } from "../../../data/ThemeContext";

export default function SingleCartItem({ product }) {
  const { removeItemFromCart, convertToCurrency, handleQuantityChange } = useContext(ThemeContext);
  return (
    <div className="cart__grid section-width">
      <img className="cart-product__img" src={product.image} alt={product.title} />
      <div className="form__container">
        <input
          type="number"
          min="1"
          className="form__number"
          value={product.quantity}
          onChange={(e) => handleQuantityChange(product, e.target.value)}
        />
        <div className="form__nav">
          <div
            className="form__quantity form__quantity--up"
            onClick={() => handleQuantityChange(product, product.quantity + 1)}
          >
            +
          </div>
          <div
            className="form__quantity form__quantity--down"
            onClick={() => handleQuantityChange(product, product.quantity - 1)}
          >
            -
          </div>
        </div>
      </div>
      <p className="cart-product__price">{convertToCurrency(product.price)}</p>
      <button
        className="cart-product__remove form__button form__button--remove"
        onClick={() => removeItemFromCart(product)}
      >
        X
      </button>
    </div>
  );
}
