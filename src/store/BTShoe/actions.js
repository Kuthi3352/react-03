import { HANDLE_PRODUCTDETAIL } from "./actionType"

export const baiTapShoeShopAction = {
    handleProductDetail: (payload) =>{
        return{
            type: HANDLE_PRODUCTDETAIL ,
            payload
        }
    }
}