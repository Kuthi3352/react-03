import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { baiTapShoeShopAction } from "../store/BTShoe/actions";

function Cart() {
  const {carts} = useSelector(state => state.baiTapShoeShop)
  console.log('carts', carts);
  const dispatch = useDispatch()
  return (
    <div
      className="modal fade"
      id="BTShoeShopCart"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Giỏ hàng
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
          {carts.length ? (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carts.map((cart, index) => {
                                        return (
                                            <tr key={cart.id}>
                                                <td>{index + 1}</td>
                                                <td>{cart.name}</td>
                                                <td>
                                                    <img
                                                        style={{
                                                            width: 80,
                                                            height: 80,
                                                        }}
                                                        className="img-fluid"
                                                        src={cart.image}
                                                        alt="..."
                                                    />
                                                </td>
                                                <td>{cart.price}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-outline-success"
                                                        onClick={() => {
                                                          dispatch(baiTapShoeShopAction.handleCartQuantity({
                                                            id: cart.id,
                                                            quantity: 1,
                                                          }))  
                                                        }}
                                                    >
                                                        +
                                                    </button>
                                                    <span className="mx-3">
                                                        {cart.cartQuantity}
                                                    </span>
                                                    <button
                                                        className="btn btn-outline-danger"
                                                        onClick={() => {
                                                          dispatch(baiTapShoeShopAction.handleCartQuantity({
                                                            id: cart.id,
                                                            quantity: -1,
                                                          }))  
                                                        }}
                                                    >
                                                        -
                                                    </button>
                                                </td>
                                                <td>{cart.cartQuantity * cart.price}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() => {
                                                          dispatch(baiTapShoeShopAction.deleteCart(cart.id));
                                                      }}
                                                    >
                                                        X
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        ) : (
                            <h2 className="text-center">Vui lòng chọn sản phẩm</h2>
                        )}
          
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Cart;
