import "./Home.css";
import homehighlights from "../../assets/homehighlight.jpg";

const Home = () => {
  return (
    <div className="home-page">
      <img
        className="home-highlights"
        src={homehighlights}
        alt="home highlights"
      />
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
