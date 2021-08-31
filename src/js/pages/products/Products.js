import React from "react";
import Title from "./components/Title";
import Nav from "../../shared/Nav";
import ProductsListing from "./components/ProductsListing";
import Footer from "../../shared/Footer";

export default function Products() {
  return (
    <main>
      <header className="header__products">
        <Nav />
        <Title />
      </header>
      <ProductsListing />
      <Footer />
    </main>
  );
}
