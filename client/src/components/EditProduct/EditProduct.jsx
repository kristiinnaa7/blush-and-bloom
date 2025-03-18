import { useEffect } from "react";
import { usegetOnePerfumeById } from "../../hooks/usePerfumes";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import * as perfumeApi from "../../api/perfumes-api";
import "./EditProduct.css";

const initialValues = {
  name: "",
  fragrance: "",
  scent: "",
  size: "",
  price: "",
  img: "",
};

const EditProduct = () => {
  const { id } = useParams();
  const [product] = usegetOnePerfumeById(id);
  const navigate = useNavigate();

  const { changeHandler, submitHandler, values, setValues } = useForm(
    initialValues,
    async (values) => {
      try {
        await perfumeApi.update(id, values);
        navigate(`/products/${id}`);
      } catch (err) {
        throw new Error(err.message);
      }
    }
  );

  useEffect(() => {
    if (product) {
      setValues(product);
    }
  }, [product, setValues]);

  return (
    <div className="wrapper-perfume-edit">
      <section id="edit">
        <div className="form-wrap-edit">
          <span className="single-perfume-name design-name-edit">
            Edit Your Custom Perfume
          </span>

          <form onSubmit={submitHandler} className="perfume-form-edit">
            <input
              type="text"
              name="name"
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

            <div className="perfumeButtons-edit">
              <button className="perfumeButton-edit" type="submit">
                Edit
              </button>
              <button
                onClick={() => navigate("/products")}
                className="perfumeButton-edit"
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

export default EditProduct;
