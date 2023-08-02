import { combineReducers } from "redux" ;
import { baiTapShoeShopReducer } from "./BTShoe/reducer";
export const rootReducer = combineReducers({
baiTapShoeShop: baiTapShoeShopReducer
})