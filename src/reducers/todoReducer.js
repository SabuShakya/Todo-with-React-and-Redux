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

const initialState = {
    todos: [],
    dataLoaded: false,
    errorMessage: ''
}

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat({
                    id: new Date() + Math.random(),
                    description: action.description,
                    priority: action.priority,
                    completed: false
                }),
                dataLoaded: true
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => (todo.id !== action.todoId))
            }

        case CHECK_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.id) {
                        todo.completed = !todo.completed
                    }
                    return todo;
                })
            }
        case ADD_EXISTING_TODO:
            return {
                ...state,
                todos: state.todos.concat(action.todoList)
            }

        case DATALOADING_START:
            return {
                ...state,
                dataLoaded: false,
                errorMessage: ''
            }
        case DATALOADED_SUCCESS:
            return {
                ...state,
                dataLoaded: true,
                errorMessage: ''
            }
        case DATALOADING_FAILURE:
            return {
                ...state,
                dataLoaded: false,
                errorMessage: action.errorMessage
            }
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.id) {
                        todo.editing = !todo.editing
                    }
                    return todo;
                })
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.updateTodo.id) {
                        todo.id = action.updateTodo.id;
                        todo.description = action.updateTodo.description;
                        todo.priority = action.updateTodo.priority;
                        todo.completed = false;
                        todo.editing = false;
                    }
                    return todo;
                })
            }
        case CANCEL_EDIT:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.id) {
                        todo.editing = !todo.editing
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}

export default TodoReducer;