import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../data/ThemeContext";
import Footer from "../../shared/Footer";
import Nav from "../../shared/Nav";
import OrdersTable from "./components/OrdersTable";

export default function Orders() {
  const { orders, setRedirect } = useContext(ThemeContext);

  useEffect(() => {
    setRedirect(false);
  }, []);

  return (
    <main>
      <header>
        <Nav />
      </header>
      <h1 className="cart__title">My Orders</h1>
      <div className="section-width">
        {orders.length ? (
          <OrdersTable orders={orders} />
        ) : (
          <p className="cart-product__empty">You haven't got any orders yet.</p>
        )}
      </div>
      <Footer />
    </main>
  );
}
