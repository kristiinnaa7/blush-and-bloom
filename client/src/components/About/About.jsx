import "./About.css";

import bird from "../../assets/bird.jpg";

const About = () => {
  return (
    <div>
      <div className="home-page-second">
        <img src={bird} alt="Blush & Bloom Logo" />
        <div className="home-page-second-text">
          <h4>Welcome to Blush & Bloom – A Fragrance for Every Moment</h4>
          <p>
            At Blush & Bloom, we believe that scent is more than just a
            fragrance—it’s an experience, a memory, and a statement. Our passion
            for perfumery drives us to curate exquisite scents that evoke
            emotions, confidence, and timeless beauty.
          </p>

          <h4>Our Story</h4>
          <p>
            Blush & Bloom was founded with the vision of creating a perfume
            collection that speaks to individuality and elegance. Inspired by
            nature’s finest ingredients and the art of perfumery, we bring you
            handpicked, high-quality fragrances that cater to every personality
            and mood.
          </p>
          <h4>Our Promise</h4>
          <p>
            Exquisite Selection – We offer a thoughtfully crafted selection of
            perfumes, from fresh floral notes to warm, sensual blends.
            <br /> Quality & Craftsmanship – Our fragrances are made with
            premium ingredients, ensuring long-lasting wear and a luxurious
            experience.
            <br /> A Personal Touch – Whether you seek a signature scent or a
            gift for a loved one, Blush & Bloom is here to help you find the
            perfect fragrance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
