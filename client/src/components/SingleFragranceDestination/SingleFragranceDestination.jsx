import React from "react";
import { useParams } from "react-router-dom";

const SingleFragranceDestination = () => {
  const { destination } = useParams();

  const destinations = [
    {
      destinationName: "Middle East- A World of Rich and Luxurious Scents.",
      description:
        "Middle Eastern perfumes embody a rich tradition of craftsmanship, blending rare and luxurious ingredients to create deep, opulent, and long-lasting fragrances. These scents are known for their high concentration, ensuring a powerful and lingering aroma that captivates the senses. Rooted in history and culture, Middle Eastern perfumery embraces oud, amber, musk, saffron, sandalwood, and incense, crafting scents that evoke warmth, mystery, and elegance. Each fragrance tells a story, unfolding in layers that transition seamlessly from spicy and woody to floral and resinous. Oud, often referred to as liquid gold, is a signature element in many Arabian perfumes, offering a rich, smoky depth. Combined with the sensual warmth of amber, the powdery softness of musk, and the exotic spice of saffron, Middle Eastern perfumes provide an unparalleled olfactory experience. These fragrances are often found in traditional attars (perfume oils), mukhallats (blended perfumes), and bakhoor (scented incense), used in personal grooming, home rituals, and special occasions. Unlike Western perfumes, which focus on lighter, fresher notes, Middle Eastern scents embrace depth, intensity, and longevity, making them ideal for those who appreciate bold and sophisticated aromas. Whether worn for daily elegance or ceremonial significance, Middle Eastern perfumes symbolize luxury, heritage, and timeless beauty, offering a sensory journey that lingers in memory long after the first application.",
      img: middleEast,
      perfume: "Al Haramain Amber Oud",
      perfumeDescription:
        "A rich and luxurious fragrance that blends warm amber with deep woody and oriental notes. This unisex perfume opens with fresh citrus and spicy top notes, leading into a heart of amber and woody accords. The base features a harmonious mix of oud, musk, and vanilla, creating a long-lasting, sophisticated scent. Known for its intense and opulent aroma, Amber Oud is perfect for those who appreciate bold and elegant fragrances with an oriental touch.",
    },
    {
      destinationName: "Bali - Intoxicating Scent of Paradise.",
      description:
        "Bali, known for its breathtaking landscapes and tranquil beauty, is the inspiration behind a fragrance that embodies serenity and exotic allure. Lotus and Frangipani flowers are central to the island's charm, their delicate and uplifting scents evoking the peaceful vibe of Bali’s tropical paradise. Lotus is a symbol of purity, with a fresh, aquatic floral note that invokes a sense of calm. Frangipani adds a creamy, sweet floral aroma that blends perfectly with the air of Bali’s lush gardens. Together, these flowers create a light yet exotic fragrance that is perfect for those who seek refreshing, tropical, and calming notes in their perfume. This fragrance captures the essence of Bali’s natural beauty, making it ideal for anyone who loves floral, refreshing, and relaxing scents. Whether you’re walking along the beaches or enjoying the vibrant sunsets, Bali's perfumes transport you to an island of tranquility and allure.",
      img: middleEast,
      perfume: "Delina Eau de Parfum",
      perfumeDescription:
        "A luxurious and sophisticated fragrance that exudes femininity and elegance. Launched in 2017, it opens with fresh and vibrant notes of bergamot, pear, and rhubarb, creating a fruity and slightly tangy opening. The heart is a rich bouquet of rose, peony, and Turkish rose, offering a floral depth, while the base is a warm blend of musk, vanilla, and cashmeran, adding a creamy, woody finish. Delina is known for its long-lasting power and is perfect for those who appreciate refined, floral, and sensual fragrances with a modern twist.",
    },
    {
      destinationName: "Malaysia - Enchanting Aroma and Vibrant Scents.",
      description:
        "Malaysia, a land where lush rainforests, exotic spices, and tropical blooms come together in a symphony of scent. Feel the warmth of golden sunshine as notes of rich sandalwood and fresh citrus intertwine with the delicate sweetness of jasmine and frangipani. Hints of aromatic spices, inspired by bustling night markets and ancient traditions, add depth and intrigue to this enchanting fragrance.",
      img: middleEast,
      perfume: "Happy Chopard Bigaradia",
      perfumeDescription:
        "A refreshing and uplifting fragrance that captures the essence of citrus and floral notes in a vibrant way. Launched in 2018, it opens with bright and zesty notes of bitter orange (bigarade), complemented by neroli and orange blossom, creating an energetic and clean first impression. The heart reveals a soft, aromatic blend of jasmine and a touch of rose, while the base is enriched with warm, earthy notes of cedarwood and amber. Happy Chopard Bigaradia is perfect for those who enjoy a crisp, citrusy fragrance with floral and woody undertones, offering a joyful and radiant scent.",
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
      <h2>Perfume: {desiredDestination.perfume}</h2>
      <p>{desiredDestination.perfumeDescription}</p>
    </div>
  );
};

export default SingleFragranceDestination;
