import { ADD_TODO, REMOVE_TODO, CHECK_TODO } from "../actionTypes/TodoActionTypes";

export const addTodo = (description, priority) => {
    return {
        type: ADD_TODO,
        description,
        priority
    }
}

export const removeTodo = (todoId) => {
    return {
        type: REMOVE_TODO,
        todoId
    }
}

export const checkTodo = (id) => {
    return {
        type: CHECK_TODO,
        id
    }
}