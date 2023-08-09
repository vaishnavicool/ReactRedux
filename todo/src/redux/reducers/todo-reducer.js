import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/action-types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case UPDATE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            title: action.payload.todo.title,
            description: action.payload.todo.description
          };
        }
        return todo;
      });
    default:
      return state;
  }
};
