import SinglePerfume from "../SinglePerfume/SinglePerfume";

const Perfumes = ({ perfumes }) => {
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
    <div> No Perfumes</div>
  );
};

export default Perfumes;
