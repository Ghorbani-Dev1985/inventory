import { combineReducers } from "redux";
import CakeReducer from "./Cake/CakeReducer";
import IcecreamReducer from "./IceCream/IceCreamReducer";
import userReducer from "./User/userReducer";
import postReducer from "./Posts/postReducer";


const rootReducer =  combineReducers({
   cake : CakeReducer,
   iceCream : IcecreamReducer,
   user : userReducer,
   post: postReducer,
});
 
export default rootReducer;