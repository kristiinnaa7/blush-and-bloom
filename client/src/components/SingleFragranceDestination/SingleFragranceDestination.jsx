import React from "react";
import { useParams } from "react-router-dom";
import middleeast from "../../assets/middle-east.jpg";
import amber from "../../assets/harmain.jpg";
import baarong from "../../assets/baarong.jpg";
import bali from "../../assets/bali-img.jpg";
import malaysia from "../../assets/malay.jpg";
import auphorie from "../../assets/auphorie.jpg";
import "./SingleFragranceDestination.css";
const SingleFragranceDestination = () => {
  const { destination } = useParams();

  const destinations = [
    {
      slug: "middle-east",
      destinationName: "Middle East - A World of Rich and Luxurious Scents",
      description:
        "The Middle East is a land of rich traditions, where fragrance is an art form woven into daily life. The air is filled with the intoxicating scent of oud, a deep and smoky wood that lingers like a whispered secret. Luxurious notes of saffron and amber create a golden warmth, while hints of rose and jasmine add a sensual elegance. Spices like cardamom and cinnamon infuse an exotic depth, evoking the bustling souks and grand palaces of the region.",
      img: middleeast,
      perfume: "Al Haramain Amber Oud",
      perfumeDescription:
        "A rich and luxurious fragrance that blends warm amber with deep woody and oriental notes. This unisex perfume opens with fresh citrus and spicy top notes, leading into a heart of amber and woody accords. The base features a harmonious mix of oud, musk, and vanilla, creating a long-lasting, sophisticated scent. Known for its intense and opulent aroma, Amber Oud is perfect for those who appreciate bold and elegant fragrances with an oriental touch.",
      perfumeImg: amber,
    },
    {
      slug: "bali",
      destinationName: "Bali - Intoxicating Scent of Paradise",
      description:
        "Bali, the Island of the Gods, is a paradise infused with the rich and exotic aromas of tropical nature. The air carries the delicate sweetness of frangipani and jasmine, mingling with the crisp freshness of ocean breezes and the deep, woody warmth of sandalwood. Lush rainforests exude the green vibrance of vetiver, while bustling markets overflow with the citrusy zest of bergamot and the spicy allure of clove. ",
      img: bali,
      perfume: "Barong Of Bali",
      perfumeDescription:
        "An Oriental Woody fragrance for both women and men, featuring notes of bergamot, mandarin orange. Barong is the king of spirits and that is what Barong Of Bali by Perfumologist aims at being ot the King of all good fragrant spirits. The key ingredient is the Balinese Oudh from Indonesia that will tantalize from the beginning to the very end of its beautiful dry down.",
      perfumeImg: baarong,
    },
    {
      slug: "malaysia",
      destinationName: "Malaysia - Enchanting Aroma and Vibrant Scents",
      description:
        "Malaysia, a land where lush rainforests, exotic spices, and tropical blooms come together in a symphony of scent. Feel the warmth of golden sunshine as notes of rich sandalwood and fresh citrus intertwine with the delicate sweetness of jasmine and frangipani. Hints of aromatic spices, inspired by bustling night markets and ancient traditions, add depth and intrigue to this enchanting fragrance. Evoking the beauty of Malaysia’s diverse landscapes and vibrant culture, this scent is a journey through tropical paradise—bold, alluring, and unforgettable.",
      img: malaysia,
      perfume: "Auphorie",
      perfumeDescription:
        "The scent opens with a burst of juicy peach, tangy yuzu, and sweet apricot. The heart reveals the unique sweetness of Japanese golden osmanthus, complemented by jasmine green tea and a subtle leather note. The base is a harmonious blend of precious woods—hinoki, cedar, and sandalwood—enhanced by earthy patchouli, caramel-like katsura leaf, and a touch of silken musk. ",
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
      <div className="destination-wrapper">
        <div className="destination-content">
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
