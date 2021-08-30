import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../data/ThemeContext";

export default function Nav() {
  const { cartItems } = useContext(ThemeContext);
  const cartLength = cartItems.length;

  return (
    <nav>
      <Link to="/">Products</Link>
      <Link to="/cart" className="nav__cart">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#fff">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
        {cartLength > 0 && <p className="nav__number">{cartLength}</p>}
      </Link>
    </nav>
  );
}
