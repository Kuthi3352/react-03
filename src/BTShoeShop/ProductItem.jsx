import React from 'react'
import { useDispatch } from 'react-redux'
import { baiTapShoeShopAction } from '../store/BTShoe/actions'

function ProductItem({giay}) {
  const dispatch = useDispatch()
  return (
    <div className="col-3 mt-3">
    <div className="card">
      <img src={giay.image} alt="..." />
      <div className="card-body">
        <h5>{giay.name}</h5>
        <p className="mt-3">{giay.price}$</p>
        <div className="mt-3 d-flex justify-content-between">
          <button className="btn btn-success" onClick={() =>{
            dispatch(baiTapShoeShopAction.handleCarts(giay))
          }}>Add To Cart</button>
          <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() =>{
            dispatch(baiTapShoeShopAction.handleProductDetail(giay))
          }}>Detail</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductItem