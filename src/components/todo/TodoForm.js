import React, {useState, useContext, useEffect} from 'react'
import TodoContext from '../../context/todo/todoContext'

const TodoForm = () => {
    const todoContext = useContext(TodoContext);

    const{addTodo} = todoContext;
}