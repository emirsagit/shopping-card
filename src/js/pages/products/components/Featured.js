import React from "react";
import { imageInteractive } from "../../../../images/index.js";

export default function Featured() {
  return (
    <section className="featured section-width">
      <div className="featured__img">
        <img src={imageInteractive.default} alt="interactive" />
      </div>
      <div className="featured__content">
        <h2 className="featured__title">
          the leader in <br /> interactive vr
        </h2>
        <p className="featured__p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque ante ac orci tincidunt, ac
          imperdiet justo ultricies. Suspendisse potenti. Mauris vel lacus sit amet nulla tempor iaculis eget sit
          amet tellus. Morbi vel ullamcorper odio.
        </p>
      </div>
    </section>
  );
}
