import "./Home.css";

import pinkflower from "../../assets/pink.jpg";
import pearlflower from "../../assets/pearl.jpg";
import { NavLink } from "react-router-dom";
import Path from "../../path";

const Home = () => {
  return (
    <div className="home-page">
      {/* <img className="home-highlights" src={paris} alt="home highlights" /> */}
      <div className="flower-images">
        <img className="pink-flower" src={pinkflower} />
        <img className="pearl-flower" src={pearlflower} />
      </div>
      <div className="home-page-texts">
        <h1>
          Where <strong>Fragrance</strong> Meets <strong>Elegance</strong>
        </h1>
        <p>Discover new worlds today</p>
        <NavLink to={Path.Products}>
          <button>See all</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
