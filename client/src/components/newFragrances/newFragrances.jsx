import React, { Fragment } from "react";
import bali from "../../assets/bali.jpg";
import malaysia from "../../assets/malaysia.jpg";
import middleEast from "../../assets/middleeast.jpg";
import "./NewFragrances.css";
import { useNavigate } from "react-router-dom";

const NewFragrances = () => {
  const navigate = useNavigate();

  const journeys = [
    {
      img: middleEast,
      destination: "Middle East",
      description: "Amber Musk Sandalwood",
      color: "pink",
      slug: "middle-east",
    },
    {
      img: bali,
      destination: "Bali",
      description: "Lotus & Frangipani Flower",
      color: "red",
      slug: "bali",
    },
    {
      img: malaysia,
      destination: "Road of Malaysia",
      description: "Jasmine & Tropical Flower",
      color: "brown",
      slug: "malaysia",
    },
  ];

  return (
    <Fragment>
      <div className="journeys-title">Perfume Journeys</div>
      <div className="new-fragrances-wrapper">
        {journeys.map((journey) => (
          <div
            key={journey.destination}
            className={`perfume-card ${journey.color}`}
            onClick={() => navigate(`/new-fragrances/${journey.slug}`)}
          >
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
