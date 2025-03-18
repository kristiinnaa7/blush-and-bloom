import { useParams } from "react-router-dom";
import { destinations } from "../../data";
import "./SingleFragranceDestination.css";

const SingleFragranceDestination = () => {
  const { destination } = useParams();

  const desiredDestination = destinations.find(
    (singleDestination) => singleDestination.slug === destination
  );

  if (!desiredDestination) {
    return <h2>Destination not found</h2>;
  }

  return (
    <div className="single-destination">
      <div className="destination-wrapper">
        <img
          className="destination-img"
          src={desiredDestination.img}
          alt={desiredDestination.destinationName}
        />
        <div className="text-overlay">
          <h1>{desiredDestination.destinationName}</h1>
          <p>{desiredDestination.description}</p>
        </div>
      </div>

      <div className="perfume-info">
        <div className="perfume-content">
          <div className="text-content">
            <h2> {desiredDestination.perfume}</h2>
            <p>{desiredDestination.perfumeDescription}</p>
          </div>
          <img
            className="perfume-img-destination"
            src={desiredDestination.perfumeImg}
            alt={desiredDestination.perfume}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleFragranceDestination;
