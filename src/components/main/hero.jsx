import React from "react";
import { Link } from "react-router-dom";
import hero_img from "../../assets/hero.jpg";
import "../../styles/main/hero.css";
import PrimaryButton from "../button/primaryBtn";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className=" hero-content-container">
        <div className="hero-content">
          <strong>MAGICAL BEAUTY</strong>
          <div>
            <h2>DREAM</h2>
            <h2>COLLECTION</h2>
          </div>
          <span>
            The dream collection is jewelry that emphasizes our individuality
            and exudes beauty and style.
          </span>
          <PrimaryButton content="FIND OUT MORE" path="/collection" />
        </div>
      </div>
      <div className="hero-img">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};
export default Hero;
