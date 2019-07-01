import { ADD_TODO, REMOVE_TODO, CHECK_TODO } from "../actionTypes/TodoActionTypes";

const initialState = {
    todos: []
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
                })
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
        default:
            return state;
    }
}

export default TodoReducer;