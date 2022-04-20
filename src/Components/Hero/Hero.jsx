import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <h1 id="home" className="text-light hero__title">
          Rakhimov Shukurullo
        </h1>
        <h2 className="hero__desc mb-5">Front-end developer</h2>
        <p className="hero__location">
          <i className="icon-location me-3"></i>
          Uzbekistan, Tashkent
        </p>
      </div>
    </section>
  );
}
export default Hero;
