import { createReducer } from "@reduxjs/toolkit";

export const people = createReducer([],builder=>{
    builder.addCase("PEOPLE",(state,{payload})=>payload)
})

export const person = createReducer({},builder=>{
    builder.addCase("PERSON",(state,{payload})=>payload)
})

// export function people(state=[],action){
//     switch(action.type){
//         case "PEOPLE":
//             return action.payload
//         default:
//             return state
//     }
// }



// export function person(state={},action){
//     switch(action.type){
//         case "PERSON":
//             return action.payload
//         default:
//             return state
//     }
// }

