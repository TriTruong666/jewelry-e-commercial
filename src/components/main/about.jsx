import React from "react";
import PrimaryButton from "../button/primaryBtn";
import "../../styles/main/about.css";
import highlight1 from "../../assets/highlight1.jpg";
import highlight2 from "../../assets/highlight2.jpg";
const highlight_img = [highlight1, highlight2];
export const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <strong>EXPERIENCE A SENSUAL MEETING</strong>
        <h2>MEET US</h2>
        <span>
          We are an exclusive jewelry store that offers the unusual and handmade
          works of art. Our passion for jewelry is visible in every product we
          present. We carefully select the highest quality materials to ensure
          not only the aesthetics, but also the durability of our products.
        </span>
        <PrimaryButton content="OUR STORY" path="/about" />
      </div>
      <div className="about-img">
        {highlight_img.map((img, index) => (
          <img key={index + 1} src={img} alt="" />
        ))}
      </div>
    </div>
  );
};
export default AboutUs;
