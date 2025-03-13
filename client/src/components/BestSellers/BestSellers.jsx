import React, { Fragment } from "react";
import Perfumes from "../Perfumes/Perfumes";

const BestSellers = () => {
  const [perfumes] = useAllPerfumes();
  const bestSellerPerfumes = perfumes.filter((perfume) => perfume.orders > 300);
  return (
    <Fragment>
      <div>BestSellers</div>
      <Perfumes perfume={bestSellerPerfumes} />
    </Fragment>
  );
};

export default BestSellers;
