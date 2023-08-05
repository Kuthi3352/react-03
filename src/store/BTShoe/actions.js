import { HANDLE_PRODUCTDETAIL, HANDLE_CARTS, HANDLE_CARTS_QUANTITY, DELETE_CART} from "./actionType"

export const baiTapShoeShopAction = {
    handleProductDetail: (payload) =>{
        return{
            type: HANDLE_PRODUCTDETAIL ,
            payload
        }
    },
    handleCarts: (payload) =>{
        return{
            type: HANDLE_CARTS,
            payload,
        }
    },
    handleCartQuantity: (payload) =>{
        return{
            type: HANDLE_CARTS_QUANTITY,
            payload,
        }
    },
    deleteCart: (payload) =>{
        return {
            type: DELETE_CART,
            payload,
        }
    }
}