import React from "react";
import "./Cards.css";

const ImageCard = ({ image, heading, description }) => {
  return (
    <section className="card card--image">
      <img className="card--image__avatar" src={image} alt="profile pic" />
      <div className="card__textContainer">
        <header>{heading}</header>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default ImageCard;
