import {
    ADD_TODO,
    REMOVE_TODO,
    CHECK_TODO,
    ADD_EXISTING_TODO,
    DATALOADING_START,
    DATALOADED_SUCCESS,
    DATALOADING_FAILURE,
    EDIT_TODO,
    UPDATE_TODO,
    CANCEL_EDIT
} from "../actionTypes/TodoActionTypes";

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

export const editTodo = (id) => {
    return {
        type: EDIT_TODO,
        id
    }
}

export const checkTodo = (id) => {
    return {
        type: CHECK_TODO,
        id
    }
}

export const addExistingTodo = (todoList) => {
    return {
        type: ADD_EXISTING_TODO,
        todoList
    }
}

export const dataloadingStart = () => {
    return {
        type: DATALOADING_START
    }
}

export const dataloadedSuccess = () => {
    return {
        type: DATALOADED_SUCCESS
    }
}

export const dataloadingFailure = (errorMsg) => {
    return {
        type: DATALOADING_FAILURE,
        errorMessage: errorMsg
    }
}

export const updateTodo = (updatedTodo) => {
    return {
        type: UPDATE_TODO,
        updateTodo
    }
}

export const cancelEdit = (id) => {
    return {
        type: CANCEL_EDIT,
        id
    }
}