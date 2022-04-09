import React from "react";
import {combineReducers,createStore} from "redux";
import {productReducer,categoryReducer,cartReducer,registration} from "./redux/reducer";

const rootReducer=combineReducers({
    productList:productReducer,
    categoryList:categoryReducer,
    cartListData:cartReducer,
    logoutToggle:registration
})

const store=createStore(rootReducer)

export default store;