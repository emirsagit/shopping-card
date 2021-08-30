import React, { useContext } from "react";
import PropTypes from "prop-types";
import Icons from "./Icons";
import useHover from "../../../hooks/useHover";
import { ThemeContext } from "../../../data/ThemeContext";

function SingleProduct({ product }) {
  const [hovered, ref] = useHover();
  const { convertToCurrency } = useContext(ThemeContext);

  return (
    <div className="listing__product" ref={ref}>
      <Icons hovered={hovered} product={product} />
      <img src={product.image} className="listing__img" alt={product.title} />
      <p className="listing__price" style={hovered ? { display: "block" } : { display: "none" }}>
        {convertToCurrency(product.price)}
      </p>
    </div>
  );
}

SingleProduct.propTypes = {
  product: PropTypes.object,
};

export default SingleProduct;
