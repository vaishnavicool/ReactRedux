import { ADD_TODO, DELETE_TODO } from "./action-types";

//add to do
export const ADD_TODO=(todo)=>({
    type:ADD_TODO,
    payload:todo
})

//delete todo
export const DELETE_TODO=(id)=>({
    type:DELETE_TODO,
    payload:id
})

//update todo
export const UPDATE_TODO=(todo,id)=>({
    type:UPDATE_TODO,
    payload:{todo:todo,todoId:id}
})