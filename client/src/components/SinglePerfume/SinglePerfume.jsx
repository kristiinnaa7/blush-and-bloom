import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./SinglePerfume.css";

const SinglePerfume = ({
  fragrance,
  img,
  name,
  price,
  scent,
  size,
  id,
  isOwner,
}) => {
  const { email } = useAuthContext();
  const username = email?.split("@")[0];

  return (
    <li className="card">
      <img src={img} alt={name} />
      <div className="name">Name: {name}</div>
      <div className="fragrance">Fragrance Notes: {fragrance}</div>
      <div className="scent">Scent: {scent}</div>
      <div className="size">Size: {size}ml</div>
      <div className="price">Price: ${price}</div>
      <Link className="details-btn" to={`/products/${id}`}>
        Details
      </Link>
      {isOwner && (
        <div className="is-owner-deskr">
          <p className="text-before-pink-name">
            Custom-Made Just for You,
            <br />
            <span className="custumerNameSpan">{username}!</span>
          </p>
        </div>
      )}
    </li>
  );
};

export default SinglePerfume;
