import React, { useContext } from "react";
import { ThemeContext } from "../../../data/ThemeContext";
export default function Icons({ hovered, product }) {
  const { setFavorite, cartItems, addItemToCart, removeItemFromCart } = useContext(ThemeContext);
  const productInCart = cartItems.some((item) => item.id === product.id);
  return (
    <div className="listing__icons">
      {/* heart */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="2em"
        height="2em"
        className="listing__icon"
        onClick={() => setFavorite(product.id)}
        style={hovered || product.favorited ? { display: "block" } : { display: "none" }}
      >
        <path fill="none" d="M0 0H24V24H0z" />
        <path
          d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"
          fill={product.favorited ? "red" : "#fff"}
          stroke="#000"
        />
      </svg>

      {/* add basket */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="2em"
        height="2em"
        className="listing__icon listing__icon--basket"
        style={hovered && !productInCart ? { display: "block" } : { display: "none" }}
        onClick={() => addItemToCart(product)}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
      </svg>

      {/* in basket */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="2em"
        height="2em"
        className="listing__icon listing__icon--basket"
        style={productInCart ? { display: "block" } : { display: "none" }}
        fill="blue"
        onClick={() => removeItemFromCart (product)}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
      </svg>
    </div>
  );
}
