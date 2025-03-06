import { Fragment } from "react";

const SinglePerfume = ({ fragrance, img, name, price, scent, size }) => {
 
  return (
    <Fragment>
      <img src={img} alt="" />
      <div>{fragrance}</div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{scent}</div>
      <div>{size}</div>
    </Fragment>
  );
};

export default SinglePerfume;
