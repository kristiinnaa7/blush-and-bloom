import { Fragment } from "react";
import { journeys } from "../../data";
import "./NewFragrances.css";
import { useNavigate } from "react-router-dom";

const NewFragrances = () => {
  const navigate = useNavigate();

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
