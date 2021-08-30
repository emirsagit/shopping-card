import { ThemeContext } from "../../../data/ThemeContext";
import React, { useContext } from "react";
import SingleProduct from "./SingleProduct";
import Featured from "./Featured";

export default function ProductsListing() {
  const { productsData } = useContext(ThemeContext);
  const featuredProduct = productsData.find((product) => product.isFeautured);
  const featuredProductDisplay = featuredProduct ? <Featured featuredProduct={featuredProduct} /> : "";
  return (
    <section>
      {featuredProductDisplay}
      <div className="listing section-width">
        <h2 className="listing__title">OUR PRODUCTS</h2>
        <div className="listing__products">
          {productsData
            ? productsData.map((product) => {
                return <SingleProduct product={product} key={product.id} />;
              })
            : "loading..."}
        </div>
      </div>
    </section>
  );
}
