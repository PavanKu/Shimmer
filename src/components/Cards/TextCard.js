import React from "react";
import "./Cards.css";

const TextCard = ({
  heading = "Heading",
  description = "lorem ipsum text",
  cta = "Click here",
}) => {
  return (
    <section className="card">
      <header className="card__heading">{heading}</header>
      <p className="card__description">{description}</p>
      <footer className="card__bottom">
        <a href={"#"} className="btn btn--link">
          {cta}
        </a>
        <a href={"#"} className="btn btn--link">
          {cta}
        </a>
      </footer>
    </section>
  );
};

export default TextCard;
