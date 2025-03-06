import { useAllPerfumes } from "../../hooks/usePerfumes";
import SinglePerfume from "../SinglePerfume/SinglePerfume";

const Products = () => {
  const [perfumes] = useAllPerfumes();

  return perfumes.length > 0 ? (
    perfumes.map((perfume) => (
      <SinglePerfume
        key={perfume._id}
        fragrance={perfume.fragrance}
        img={logo}
        name={perfume.name}
        price={perfume.price}
        scent={perfume.scent}
        size={perfume.size}
      />
    ))
  ) : (
    <div>No perfumes</div>
  );
};

export default Products;
