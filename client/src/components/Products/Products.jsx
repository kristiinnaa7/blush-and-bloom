import { useAllPerfumes } from "../../hooks/usePerfumes";
import Perfumes from "../Perfumes/Perfumes";
import "./Products.css";

const Products = () => {
  const [perfumes] = useAllPerfumes();

  return (
    <div className="products-wrapper">
      <Perfumes perfumes={perfumes} />
    </div>
  );
};

export default Products;
