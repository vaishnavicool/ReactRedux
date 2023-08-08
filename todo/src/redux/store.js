import {createstore, combinereducer}  from 'react-redux'
import todoReducer from './reducers/todo-reducer'
import { combineReducers } from 'redux'

const rootReducer=combineReducers({todoReducer})

const store = createstore(rootReducer)

export default store;
