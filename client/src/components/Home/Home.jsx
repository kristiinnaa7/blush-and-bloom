import "./Home.css";
import home from '../../assets/home.jpg';
import homehighlights from '../../assets/homehighlight.jpg';

const Home = () => {
  return (
    <div className="home-page">
    <img className='home-bg' src={home} alt='home image'/>
    <img className="home-highlights" src={homehighlights} alt='home highlights'/>
    <h1>Where <strong>Fragrance</strong> Meets <strong>Elegance</strong></h1>
    <p>Discover new worlds today</p>
    <button>See all</button>
</div>
  )
};

export default Home;
