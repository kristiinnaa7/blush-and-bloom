import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
  useDeletePerfume,
  usegetOnePerfumeById,
} from "../../hooks/usePerfumes";
import { useAuthContext } from "../context/AuthContext";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [perfume] = usegetOnePerfumeById(id);
  const { userId } = useAuthContext();
  const isOwner = userId === perfume._ownerId;
  const [openPopUp, setopenPopUp] = useState(false);

  const togglePopUP = (e) => {
    e.preventDefault();
    setopenPopUp(true);
  };

  const barDeleteHandler = async () => {
    try {
      await useDeletePerfume(id);
      navigate("/products");
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const barCancelHandler = () => {
    setopenPopUp(false);
    return;
  };

  return (
    <div className="details-wrapper">
      <div className="details-card">
        <img className="details-img" src={perfume.img} alt={perfume.name} />
        <div className="name">Name: {perfume.name}</div>
        <div className="fragrance">Fragrance Notes: {perfume.fragrance}</div>
        <div className="scent">Scent: {perfume.scent}</div>
        <div className="size">Size: {perfume.size}ml</div>
        <div className="price">Price: ${perfume.price}</div>
        {/* <div className="description">Description: ${perfume.description}</div> */}
      </div>
      <button onClick={() => navigate("/products")}>All Perfumes</button>
      {isOwner && (
        <div>
          <NavLink to={`/products/${id}/edit`} id="edit-btn">
            <button>Edit</button>
          </NavLink>
          <button onClick={togglePopUP} id="delete-btn">
            Delete
          </button>
        </div>
      )}

      {openPopUp && (
        <div className="pop-up-wrapper">
          <p>Are you sure you want to delete the {perfume.name} perfume?</p>
          <div className="pop-up-btns">
            <button onClick={barDeleteHandler}>OK</button>
            <button onClick={barCancelHandler}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
