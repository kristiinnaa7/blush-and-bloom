import "./Home.css";

import paris from "../../assets/about.jpg";

const Home = () => {
  return (
    <div className="home-page">
      {/* <img className="home-highlights" src={paris} alt="home highlights" /> */}
      <div className="home-page-texts">
        <h1>
          Where <strong>Fragrance</strong> Meets <strong>Elegance</strong>
        </h1>
        <p>Discover new worlds today</p>
        <button>See all</button>
      </div>
    </div>
  );
};

export default Home;
