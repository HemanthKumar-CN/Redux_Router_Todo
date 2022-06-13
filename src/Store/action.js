import axios from "axios";
import { ADD_TODO, ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, COMPLETE_TODO, COUNTER_DECREMENT, COUNTER_INCREMENT, DELETE_TODO, GET_TODOS, GET_TODOS_ERROR, GET_TODOS_LOADING, GET_TODOS_SUCCESS, UPDATE_TODO } from "./action.types";

// counter app
export const counterInc=()=>({type: COUNTER_INCREMENT});
export const counterDec=()=>({type:COUNTER_DECREMENT});

// todo----------------------------------------------


export const getTodos=()=>(dispatch)=>{
    dispatch({type:GET_TODOS_LOADING})
    axios.get(`  http://localhost:8080/todos`).then(r=> {
        dispatch({type:GET_TODOS_SUCCESS,payload:r.data})
    })
    .catch((err)=> {
        dispatch({type:GET_TODOS_ERROR})
    })
}





export const todoAdd=(payload)=>(dispatch)=> {
    dispatch({type:ADD_TODO_LOADING})

    axios.post(`http://localhost:8080/todos`,payload)
    .then(r=> {
        dispatch({type: ADD_TODO_SUCCESS, payload:r.data})
    })
    .catch(err=> {
        dispatch({type:ADD_TODO_ERROR})

    })
};






export const todoComplete=(id)=>({type:COMPLETE_TODO, payload:id});
export const todoUpdate=(payload)=> ({type: UPDATE_TODO, payload});
export const todoRemove=(id)=>({type:DELETE_TODO, payload:id})