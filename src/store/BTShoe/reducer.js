import { HANDLE_PRODUCTDETAIL, HANDLE_CARTS, HANDLE_CARTS_QUANTITY, DELETE_CART } from "./actionType";

const initialState = {
  productDetail: {
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
  },
  carts: [],
};

export const baiTapShoeShopReducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case HANDLE_PRODUCTDETAIL: {
      let newPrdDetails = { ...action.payload };
      return { ...state, productDetail: newPrdDetails };
    }
    case HANDLE_CARTS: {
        const newCarts = [...state.carts]
        //KT xem trong carts đã tồn tại sản phẩm hay chưa
        const index = newCarts.findIndex((item) => item.id === action.payload.id)
        if(index !== -1){
            newCarts[index].cartQuantity += 1
        }else{
            newCarts.push({...action.payload, cartQuantity: 1})
        }
        return { ...state, carts: newCarts}
    }
    case HANDLE_CARTS_QUANTITY: {
        const newCarts = [...state.carts]
        const index = newCarts.findIndex((item) => item.id === action.payload.id)
        newCarts[index].cartQuantity =
        newCarts[index].cartQuantity + action.payload.quantity || 1
         // 1 - 1 = 0 || 1
        return { ...state, carts: newCarts }
    }
    case DELETE_CART: {
        const newCarts = state.carts.filter((item) => item.id !== action.payload)
        return { ...state, carts: newCarts }
      }

    default:
      return state;
  }
};
