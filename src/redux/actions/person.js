import request from "../../utils/request"
import { createAction } from "@reduxjs/toolkit"


const setPoeple = createAction('PEOPLE')
const setPerson = createAction('PERSON')

// export function setPoeple(payload){
//     return {type:"PEOPLE",payload}
// }


// export function setPerson(payload){
//     return {type:"PERSON",payload}
// }

export function getPeople(){
    return dispatch =>{
        request('/users').then(({data}) => dispatch(setPoeple(data)))
    }
}

export const getPerson = (id) =>{
    return dispatch =>{
        dispatch(setPerson({}))
        request(`/users/${id}`).then(({data}) => dispatch(setPerson(data)))
    }
}