import  React, {useReducer} from 'react';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import {
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO
} from '../types'

const TodoState = props => {
    const initialState ={
        todoItems: []
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = todoItem => {
        dispatch({type: ADD_TODO, payload: todoItem});
    }

    return (
        <TodoContext.Provider
        value={
            {
                todoItems: state.todoItems,
                addTodo,
                deleteTodo,
            }
        }>
            {props.children}
        </TodoContext.Provider>
    );
}