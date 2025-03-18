import React, { useState } from "react";
import SinglePerfume from "../SinglePerfume/SinglePerfume";
import { useAuthContext } from "../context/AuthContext";
import "./Perfumes.css";

const Parfumes = ({ perfumes }) => {
  const [sortBy, setSortBy] = useState("price");
  const { userId } = useAuthContext();

  const sortPerfumes = (perfumes, sortBy) => {
    return perfumes?.sort((a, b) => {
      if (sortBy === "price") {
        return Number(a.price) - Number(b.price);
      } else if (sortBy === "size") {
        return Number(a.size) - Number(b.size);
      }
      return 0;
    });
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  const sortedPerfumes = sortPerfumes([...perfumes], sortBy);

  return perfumes.length > 0 ? (
    <div>
      <div className="sort-options">
        <label className="label" htmlFor="sort">
          Sort by:{" "}
        </label>
        <select id="sort" value={sortBy} onChange={handleSortChange}>
          <option value="price">Price (Ascending Order)</option>
          <option value="size">Size (Ascending Order)</option>
        </select>
      </div>

      <ul className="card-container">
        {sortedPerfumes.map((perfume) => (
          <SinglePerfume
            key={perfume._id}
            fragrance={perfume.fragrance}
            img={perfume.img}
            name={perfume.name}
            price={perfume.price}
            scent={perfume.scent}
            size={perfume.size}
            isOwner={userId === perfume._ownerId}
            id={perfume._id}
          />
        ))}
      </ul>
    </div>
  ) : (
    <div>No perfumes</div>
  );
};

export default Parfumes;
