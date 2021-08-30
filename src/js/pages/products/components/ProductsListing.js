import { ThemeContext } from "../../../data/ThemeContext";
import React, { useContext } from "react";
import SingleProduct from "./SingleProduct";

export default function ProductsListing() {
  const { productsData } = useContext(ThemeContext);
  console.log(productsData);
  return (
    <section className="listing section-width">
      <h2 className="listing__title">OUR PRODUCTS</h2>
      <div className="listing__products">
        {productsData
          ? productsData.map((product) => {
              return <SingleProduct product={product} key={product.id} />;
            })
          : "loading..."}
      </div>
    </section>
  );
}
