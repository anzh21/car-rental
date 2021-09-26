import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducer from '../Redux/Reducer/Reducer'
// import Cookie from "js-cookie";
// import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer, productReviewSaveReducer } from './reducers/productReducers';
// import { cartReducer } from './reducers/cartReducers';
// import { userSigninReducer, userRegisterReducer, userUpdateReducer } from './reducers/userReducers';
// import { orderCreateReducer, orderDetailsReducer, orderPayReducer, myOrderListReducer, orderListReducer, orderDeleteReducer } from './reducers/orderReducer';

// const cartItems = Cookie.getJSON("cartItems") || [];
// const userInfo = Cookie.getJSON("userInfo") || null;

const initialState= {};
const reducer = combineReducers ({
    carReducer: Reducer,
    
})

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
export default store;