import { HANDLE_PRODUCTDETAIL } from "./actionType";

const initialState ={
    productDetail: {
        id: 1,
        name: "Adidas Prophere",
        alias: "adidas-prophere",
        price: 350,
        description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 995,
        image: "http://svcy3.myclass.vn/images/adidas-prophere.png"
      }
       
}

export const baiTapShoeShopReducer = (state = initialState, action) => {
    console.log('action', action);
    switch (action.type) {
        case HANDLE_PRODUCTDETAIL: {
            let newPrdDetails = {...action.payload}
            return {...state, productDetail: newPrdDetails}
        }
            
           
    
        default:
            return state
    }
   
}