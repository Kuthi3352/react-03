import React from "react";
import ProductList from "./ProductList";

import giayList from "./data.json";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";

function BTShoeShopRedux() {
  console.log("giayList", giayList);
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
      <h1>BTShoeShopRedux</h1>
      <button className="btn btn-success"
      data-bs-toggle="modal"
      data-bs-target="#BTShoeShopCart">
        Giỏ hàng
      </button>
      </div>
      
      <ProductList giayList={giayList} />

    <ProductDetail />
    <Cart />
    </div>
  );
}

export default BTShoeShopRedux;
