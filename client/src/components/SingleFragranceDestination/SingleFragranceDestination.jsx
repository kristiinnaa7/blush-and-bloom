import React from "react";
import { useParams } from "react-router-dom";
import middleeast from "../../assets/middleeast.jpg";
import amber from "../../assets/amber.jpg";
import baarong from "../../assets/baarong.jpg";
import bali from "../../assets/bali.jpg";
import malaysia from "../../assets/malaysia.jpg";
import auphorie from "../../assets/auphorie.jpg";
const SingleFragranceDestination = () => {
  const { destination } = useParams();

  const destinations = [
    {
      destinationName: "Middle East- A World of Rich and Luxurious Scents.",
      description:
        "Middle Eastern perfumes embody a rich tradition of craftsmanship, blending rare and luxurious ingredients to create deep, opulent, and long-lasting fragrances. These scents are known for their high concentration, ensuring a powerful and lingering aroma that captivates the senses. Rooted in history and culture, Middle Eastern perfumery embraces oud, amber, musk, saffron, sandalwood, and incense, crafting scents that evoke warmth, mystery, and elegance. Each fragrance tells a story, unfolding in layers that transition seamlessly from spicy and woody to floral and resinous. Oud, often referred to as liquid gold, is a signature element in many Arabian perfumes, offering a rich, smoky depth. Combined with the sensual warmth of amber, the powdery softness of musk, and the exotic spice of saffron, Middle Eastern perfumes provide an unparalleled olfactory experience. These fragrances are often found in traditional attars (perfume oils), mukhallats (blended perfumes), and bakhoor (scented incense), used in personal grooming, home rituals, and special occasions. Unlike Western perfumes, which focus on lighter, fresher notes, Middle Eastern scents embrace depth, intensity, and longevity, making them ideal for those who appreciate bold and sophisticated aromas. Whether worn for daily elegance or ceremonial significance, Middle Eastern perfumes symbolize luxury, heritage, and timeless beauty, offering a sensory journey that lingers in memory long after the first application.",
      img: middleeast,
      perfume: "Al Haramain Amber Oud",
      perfumeDescription:
        "A rich and luxurious fragrance that blends warm amber with deep woody and oriental notes. This unisex perfume opens with fresh citrus and spicy top notes, leading into a heart of amber and woody accords. The base features a harmonious mix of oud, musk, and vanilla, creating a long-lasting, sophisticated scent. Known for its intense and opulent aroma, Amber Oud is perfect for those who appreciate bold and elegant fragrances with an oriental touch.",
      perfumeImg: amber,
    },
    {
      destinationName: "Bali - Intoxicating Scent of Paradise.",
      description:
        "Bali, known for its breathtaking landscapes and tranquil beauty, is the inspiration behind a fragrance that embodies serenity and exotic allure. Lotus and Frangipani flowers are central to the island's charm, their delicate and uplifting scents evoking the peaceful vibe of Bali’s tropical paradise. Lotus is a symbol of purity, with a fresh, aquatic floral note that invokes a sense of calm. Frangipani adds a creamy, sweet floral aroma that blends perfectly with the air of Bali’s lush gardens. Together, these flowers create a light yet exotic fragrance that is perfect for those who seek refreshing, tropical, and calming notes in their perfume. This fragrance captures the essence of Bali’s natural beauty, making it ideal for anyone who loves floral, refreshing, and relaxing scents. Whether you’re walking along the beaches or enjoying the vibrant sunsets, Bali's perfumes transport you to an island of tranquility and allure.",
      img: bali,
      perfume: "Barong Of Bali",
      perfumeDescription:
        "An Oriental Woody fragrance for both women and men, featuring notes of bergamot, mandarin orange, Turkish rose, agarwood (oud), and patchouli. Launched in 2019.",
      perfumeImg: baarong,
    },
    {
      destinationName: "Malaysia - Enchanting Aroma and Vibrant Scents.",
      description:
        "Malaysia, a land where lush rainforests, exotic spices, and tropical blooms come together in a symphony of scent. Feel the warmth of golden sunshine as notes of rich sandalwood and fresh citrus intertwine with the delicate sweetness of jasmine and frangipani. Hints of aromatic spices, inspired by bustling night markets and ancient traditions, add depth and intrigue to this enchanting fragrance.",
      img: malaysia,
      perfume: "Auphorie",
      perfumeDescription:
        "The scent opens with a burst of juicy peach, tangy yuzu, and sweet apricot. The heart reveals the unique sweetness of Japanese golden osmanthus, complemented by jasmine green tea and a subtle leather note. The base is a harmonious blend of precious woods—hinoki, cedar, and sandalwood—enhanced by earthy patchouli, caramel-like katsura leaf, and a touch of silken musk. This complex composition evokes a serene stroll through an ancient Far Eastern city during autumn, with blooming osmanthus and hints of citrus and leather in the air.",
      perfumeImg: auphorie,
    },
  ];

  const desiredDestination = destinations.find(
    (singleDestination) => singleDestination.destinationName === destination
  );

  if (!desiredDestination) {
    return <h2>Destination not found</h2>;
  }

  return (
    <div>
      <h1>{desiredDestination.destinationName}</h1>
      <p>{desiredDestination.description}</p>
      <img
        src={desiredDestination.img}
        alt={desiredDestination.destinationName}
      />
      <h2>Perfume: {desiredDestination.perfume}</h2>
      <p>{desiredDestination.perfumeDescription}</p>
      <img
        src={desiredDestination.perfumeImg}
        alt={desiredDestination.perfume}
      />
    </div>
  );
};

export default SingleFragranceDestination;
