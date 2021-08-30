import React, { useState } from "react";
import PropTypes from "prop-types";
import Icons from "./Icons";

function SingleProduct({ product }) {
  const [hovered, setHovered] = useState(false);
  function toggleHover() {
    setHovered((prev) => !prev);
  }

  return (
    <div
      className={`listing__product ${hovered ? "hovered" : "not-hovered"}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <Icons hovered={hovered} product={product} />
      <img src={product.image} className="listing__img" />
    </div>
  );
}

SingleProduct.propTypes = {
  product: PropTypes.object,
};

export default SingleProduct;

// # Challenge

// Add propTypes to the Image component

// 1. className should be a string
// 2. img should be an object, specifically an object with `id`, `url`, and `isFavorite` properties
//     a. Hint: Specifying the properties of an object is called and object's "shape"

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
