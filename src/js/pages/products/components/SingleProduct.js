import React, { useState } from "react";
import Icons from "./Icons";

export default function SingleProduct({ product }) {
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
      <Icons />
      <img src={product.image} className="listing__img" />
    </div>
  );
}
