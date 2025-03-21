import "./Home.css";
import pinkflower from "../../assets/pink.jpg";
import pearlflower from "../../assets/pearl.jpg";
import { NavLink } from "react-router-dom";
import Path from "../../path";
import BestSellers from "../BestSellers/BestSellers";
import NewFragrances from "../NewFragrances/NewFragrances";

const Home = () => {
  return (
    <>
      <div className="home-page">
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
      <BestSellers />
      <NewFragrances />
    </>
  );
};

export default Home;
