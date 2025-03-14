import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useCreatePerfume } from "../../hooks/usePerfumes";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

import "./AddProduct.css";
import Path from "../../path";

const initialValues = {
  name: "",
  fragrance: "",
  scent: "",
  size: "",
  price: "",
  img: "",
};

const AddProduct = () => {
  const [error, setError] = useState("");
  const { isAuthenticated, email } = useAuthContext();
  const name = email?.split("@")[0];
  const navigate = useNavigate();
  const createPerfume = useCreatePerfume();
  const createHandler = async (values) => {
    try {
      const { name, fragrance, scent, size, price, img } = values;

      if (
        !name.trim() ||
        !fragrance.trim() ||
        !scent.trim() ||
        !size.trim() ||
        !price.trim() ||
        !img.trim()
      ) {
        setError("All fields are required. Please fill out all fields.");
        return;
      }

      const { _id: perfumeId } = await createPerfume(values);
      navigate(`/products/${perfumeId}`);
    } catch (err) {
      setError(err.message);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="wrapper-perfume">
        <h2>PLEASE LOG IN TO ADD PRODUCT</h2>
        <NavLink to={Path.Login} className="">
          <li>Login</li>
        </NavLink>
      </div>
    );
  }

  const { changeHandler, values, submitHandler } = useForm(
    initialValues,
    createHandler
  );

  return (
    <div className="wrapper-perfume">
      <section id="create">
        <div className="form-wrap">
          <span className="single-perfume-name design-name">
            Design Your Custom Perfume
          </span>

          <form onSubmit={submitHandler} className="perfume-form">
            <input
              type="text"
              name="flavor"
              value={values.name}
              onChange={changeHandler}
              id="name"
              placeholder="Name"
            />
            <input
              type="text"
              name="fragrance"
              value={values.fragrance}
              onChange={changeHandler}
              id="fragrance"
              placeholder="Fragrance notes"
            />
            <input
              type="text"
              name="scent"
              value={values.scent}
              onChange={changeHandler}
              id="scent"
              placeholder="Scent"
            />
            <input
              type="text"
              name="size"
              value={values.size}
              onChange={changeHandler}
              id="size"
              placeholder="Size"
            />
            <input
              type="text"
              name="price"
              value={values.price}
              onChange={changeHandler}
              id="price"
              placeholder="Price"
            />
            <input
              type="text"
              name="img"
              value={values.img}
              onChange={changeHandler}
              id="img"
              placeholder="Image"
            />
            {error && (
              <p className="field">
                <span style={{ fontSize: "18px", color: "red" }}>{error}</span>
              </p>
            )}
            <div className="perfumeButtons">
              <button className="perfumeButton" type="submit">
                Create
              </button>
              <button
                onClick={() => navigate("/products")}
                className="perfumeButton"
                type="button"
              >
                All Products
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
