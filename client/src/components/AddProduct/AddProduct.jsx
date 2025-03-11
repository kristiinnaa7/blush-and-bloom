import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useCreatePerfume } from "../../hooks/usePerfumes";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

import "./AddProduct.css";

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
  const { email } = useAuthContext();
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

  const { changeHandler, values, submitHandler } = useForm(
    initialValues,
    createHandler
  );

  return (
    <div className="wrapper-big-create">
      <section id="create">
        <div className="form">
          <h2>
            Design Your <br /> Custom Perfume,
            <span className="single-perfume-name design-name">{name}!</span>
          </h2>
          <form onSubmit={submitHandler} className="create-form">
            <input
              type="text"
              name="flavor"
              value={values.name}
              onChange={changeHandler}
              id="name"
              placeholder="name"
            />
            <input
              type="text"
              name="fragrance"
              value={values.fragrance}
              onChange={changeHandler}
              id="fragrance"
              placeholder="fragrance"
            />
            <input
              type="text"
              name="scent"
              value={values.scent}
              onChange={changeHandler}
              id="scent"
              placeholder="scent"
            />
            <input
              type="text"
              name="size"
              value={values.size}
              onChange={changeHandler}
              id="size"
              placeholder="size"
            />
            <input
              type="text"
              name="price"
              value={values.price}
              onChange={changeHandler}
              id="price"
              placeholder="price"
            />
            <input
              type="text"
              name="img"
              value={values.img}
              onChange={changeHandler}
              id="img"
              placeholder="img"
            />
            {error && (
              <p className="field">
                <span style={{ fontSize: "18px", color: "red" }}>{error}</span>
              </p>
            )}
            <div className="buttons">
              <button className="createButton" type="submit">
                Create
              </button>
              <button
                onClick={() => navigate("/products")}
                className="createButton"
                type="button"
              >
                All Bars
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
