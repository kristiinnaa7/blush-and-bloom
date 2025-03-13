import { useAllPerfumes } from "../../hooks/usePerfumes";
import Perfumes from "../Perfumes/Perfumes";

import "./Products.css";
const Products = () => {
  const [perfumes] = useAllPerfumes();

  return <Perfumes perfumes={perfumes} />;
};

export default Products;
