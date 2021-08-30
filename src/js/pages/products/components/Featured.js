import React, { useContext } from "react";
import { ThemeContext } from "../../../data/ThemeContext";
import useHover from "../../../hooks/useHover";
import Icons from "./Icons";

export default function Featured({ featuredProduct }) {
  const { convertToCurrency } = useContext(ThemeContext);
  const [hovered, ref] = useHover();

  return (
    <div className="featured section-width" ref={ref}>
      <div className="featured__img">
        <img src={featuredProduct.image} alt="interactive" />
      </div>
      <div className="featured__content">
        <Icons hovered={hovered} product={featuredProduct} />
        <div className="featured__header">
          <h2 className="featured__title">BEST SELLER</h2>
          <p className="featured__price">{convertToCurrency(featuredProduct.price)}</p>
        </div>
        <p className="featured__p">{featuredProduct.title}</p>
      </div>
    </div>
  );
}
