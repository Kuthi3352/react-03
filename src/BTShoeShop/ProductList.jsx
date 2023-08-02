import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ giayList }) {
  return (
    <div className="row">
      {giayList.map((giay) => (
       <ProductItem giay={giay}  key={giay.id}/>
      ))}
    </div>
  );
}

export default ProductList;
