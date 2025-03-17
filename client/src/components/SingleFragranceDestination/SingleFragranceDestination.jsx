import React from "react";
import { useParams } from "react-router-dom";
import middleeast from "../../assets/middleeast.jpg";
import amber from "../../assets/amber.jpg";
import baarong from "../../assets/baarong.jpg";
import bali from "../../assets/bali.jpg";
import malaysia from "../../assets/malaysia.jpg";
import auphorie from "../../assets/auphorie.jpg";
import "./SingleFragranceDestination.css";
const SingleFragranceDestination = () => {
  const { destination } = useParams();

  const destinations = [
    {
      slug: "middle-east",
      destinationName: "Middle East - A World of Rich and Luxurious Scents",
      description:
        "Middle Eastern perfumes embody a rich tradition of craftsmanship, blending rare and luxurious ingredients...",
      img: middleeast,
      perfume: "Al Haramain Amber Oud",
      perfumeDescription:
        "A rich and luxurious fragrance that blends warm amber with deep woody and oriental notes...",
      perfumeImg: amber,
    },
    {
      slug: "bali",
      destinationName: "Bali - Intoxicating Scent of Paradise",
      description:
        "Bali, known for its breathtaking landscapes and tranquil beauty, is the inspiration behind a fragrance...",
      img: bali,
      perfume: "Barong Of Bali",
      perfumeDescription:
        "An Oriental Woody fragrance for both women and men, featuring notes of bergamot, mandarin orange...",
      perfumeImg: baarong,
    },
    {
      slug: "malaysia",
      destinationName: "Malaysia - Enchanting Aroma and Vibrant Scents",
      description:
        "Malaysia, a land where lush rainforests, exotic spices, and tropical blooms come together in a symphony of scent...",
      img: malaysia,
      perfume: "Auphorie",
      perfumeDescription:
        "The scent opens with a burst of juicy peach, tangy yuzu, and sweet apricot...",
      perfumeImg: auphorie,
    },
  ];

  const desiredDestination = destinations.find(
    (singleDestination) => singleDestination.slug === destination
  );

  if (!desiredDestination) {
    return <h2>Destination not found</h2>;
  }

  return (
    <div className="single-destination">
      <h1>{desiredDestination.destinationName}</h1>
      <p>{desiredDestination.description}</p>
      <img
        src={desiredDestination.img}
        alt={desiredDestination.destinationName}
      />

      <div className="perfume-info">
        <h2>Perfume: {desiredDestination.perfume}</h2>
        <p>{desiredDestination.perfumeDescription}</p>
        <img
          src={desiredDestination.perfumeImg}
          alt={desiredDestination.perfume}
        />
      </div>
    </div>
  );
};

export default SingleFragranceDestination;
