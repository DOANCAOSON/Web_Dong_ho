import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { getAllProductsReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { getItemProductsReducer } from "./reducers/addProductItemReducers";
import { postItemProductsReducer } from "./reducers/createProductItemReducers";


const finalReducer = combineReducers({
    getAllProductsReducer: getAllProductsReducer,
    cartReducer: cartReducer,
    getItemProductsReducer: getItemProductsReducer,
    postItemProductsReducer: postItemProductsReducer,
});

const initialState = {};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
    finalReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
