import React from "react";
import Title from "./components/Title";
import Nav from "../../shared/Nav";
import Featured from "./components/Featured";
import ProductsListing from "./components/ProductsListing";

export default function Products() {
  return (
    <main>
      <header className="bg-header">
        <Nav />
        <Title />
      </header>
      <Featured />
      <ProductsListing />
    </main>
  );
}
