import Perfumes from "../Perfumes/Perfumes";
import { useAllPerfumes } from "../../hooks/usePerfumes";
import "./BestSellers.css";
const BestSellers = () => {
  const [perfumes] = useAllPerfumes();
  const bestSellerPerfumes = perfumes?.filter(
    (perfume) => perfume.orders > 300
  );
  return (
    <div className="best-sellers-wrapper">
      <div className="best-sellers-title">Best Sellers</div>
      <Perfumes perfumes={bestSellerPerfumes} />
    </div>
  );
};

export default BestSellers;
