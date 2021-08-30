import React, { useContext } from "react";
import Nav from "../../shared/Nav";
import { ThemeContext } from "../../data/ThemeContext";

export default function Cart() {
  const { cartItems } = useContext(ThemeContext);
  console.log(cartItems);
  return (
    <main>
      <header>
        <Nav />
      </header>
      <h1 className="cart__title">Check out </h1>
      {cartItems.length ? (
        cartItems.map((product) => {
          {
            console.log(product);
          }
          return (
            <div className="cart__grid section-width" key={product.id}>
              <img className="cart-product__img" src={product.image} />
              <input type="number" min="1" className="cart-product__number" value="1" />
              <p className="cart-product__price">
                {product.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <button className="cart-product__remove">X</button>
            </div>
          );
        })
      ) : (
        <p className="cart-product__empty">There aren't any items in your cart</p>
      )}
    </main>
  );
}
