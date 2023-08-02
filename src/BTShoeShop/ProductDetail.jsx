import React from "react";
import { useSelector } from 'react-redux'
const ProductDetail = () => {
  const  { productDetail } = useSelector(state => state.baiTapShoeShop)
  console.log('productDetail', productDetail);
  return (
    // <!-- Modal -->
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Chi tiết sản phẩm
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-4">
                <img className="img-fluid" src={productDetail.image} alt="..." />
              </div>
              <div className="col-8">
                <h3 className="mb-3">{productDetail.name}</h3>
                <p className="mb-3">{productDetail.description}</p>
                <p className="mb-3">{productDetail.price}$</p>
                <p>Số Lượng: 995</p>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
