import { useAllPerfumes } from "../../hooks/usePerfumes";
import SinglePerfume from "../SinglePerfume/SinglePerfume";
import "./Products.css";
const Products = () => {
  const [perfumes] = useAllPerfumes();

  return perfumes.length > 0 ? (
    <ul className="card-container">
      {perfumes.map((perfume) => (
        <SinglePerfume
          key={perfume._id}
          fragrance={perfume.fragrance}
          img={perfume.img}
          name={perfume.name}
          price={perfume.price}
          scent={perfume.scent}
          size={perfume.size}
        />
      ))}
    </ul>
  ) : (
    <div>No perfumes</div>
  );
};

export default Products;
