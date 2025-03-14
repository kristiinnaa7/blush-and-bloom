import React, { Fragment } from "react";
import bali from "../../assets/bali.jpg";
import malaysia from "../../assets/malaysia.jpg";
import middleEast from "../../assets/middleeast.jpg";
import "./NewFragrances.css";

const NewFragrances = () => {
  const journeys = [
    {
      img: middleEast,
      destination: "Middle East",
      description: "Amber Musk Sandalwood",
      color: "pink",
    },
    {
      img: bali,
      destination: "Bali",
      description: "Lotus & Frangipani Flower",
      color: "red",
    },
    {
      img: malaysia,
      destination: "Road of Malaysia",
      description: "Jasmine & Tropical Flower",
      color: "brown",
    },
  ];
  return (
    <Fragment>
      <div className="journeys-title">Perfume Journeys</div>
      <div className="new-fragrances-wrapper">
        {journeys.map((journey) => (
          <div className={`perfume-card ${journey.color}`}>
            <img src={journey.img} />
            <div className="new-fragrances-description">
              <h1 className="journey">Journey to the</h1>
              <h1>{journey.destination}</h1>
              <h3>{journey.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default NewFragrances;
