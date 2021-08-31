import React, { useContext } from "react";
import Nav from "../../shared/Nav";
import { ThemeContext } from "../../data/ThemeContext";
import SingleCartItem from "./components/SingleCartItem";
import OrderBtnEl from "./components/OrderBtnEl";
import Footer from "../../shared/Footer";

export default function Cart() {
  const { cartItems } = useContext(ThemeContext);
  let totalPrice = 0;
  let cartItemsEls = "";
  let orderBtnEl = "";

  if (cartItems.length) {
    cartItemsEls = cartItems.map((product) => {
      totalPrice += product.price * product.quantity;
      return <SingleCartItem product={product} key={product.id} />;
    });
    orderBtnEl = <OrderBtnEl totalPrice={totalPrice} />;
  } else {
    cartItemsEls = <p className="cart-product__empty">There aren't any items in your cart</p>;
  }
  return (
    <main>
      <header>
        <Nav />
      </header>
      <h1 className="cart__title">Check out </h1>
      {cartItemsEls}
      {orderBtnEl}
      <Footer />
    </main>
  );
}
