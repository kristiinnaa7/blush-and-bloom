import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

import "./SinglePerfume.css";

const SinglePerfume = ({ fragrance, img, name, price, scent, size }) => {
  return (
    <li className="card">
      <img src={img} alt="" />
      <div>{fragrance}</div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{scent}</div>
      <div>{size}</div>
      <Link className="details-btn" to={`/products/${id}`}>
        Details
      </Link>
      {isOwner && (
        <div className="is-owner-deskr">
          <p className="text-before-pink-name">
            Custom-Made Just for You,{" "}
            <span className="custumerNameSpan">{name}!</span>
          </p>
        </div>
      )}
    </li>
  );
};

export default SinglePerfume;
