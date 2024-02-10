// import { applyMiddleware, createStore } from "redux";
import reducer from "../reducers";
// import { thunk } from "redux-thunk";
import {configureStore} from '@reduxjs/toolkit'

// function middleware({dispatch,getState}){
//     return function (next){
//         return function (action){
//             console.log(action)
//             if(typeof action=== 'function'){
//                 action(dispatch) //chun next ro call nakardim joloye raftan be reducer ro migire
//             }
//             else{
//                 next(action)
//             }
//         }
//     }
// } 

// const middleware =({dispatch,getState})=>next=>action=>typeof action === 'function'?action(dispatch):next(action)
    


// const store = createStore(reducer,applyMiddleware(thunk))
const store = configureStore({reducer})  //thunk ro dare

export default store;