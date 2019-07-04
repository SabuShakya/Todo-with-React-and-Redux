import Axios from 'axios';
import { addTodo, addExistingTodo, dataloadingStart, dataloadingFailure, dataloadedSuccess, updateTodo } from '../actions/todoActions';
import { addPriorityAndPrepareData, updateTodoWithUpdatedData } from '../utils/todoUtils';

export const persistTodo = (description, priority) => dispatch => {
    dispatch(dataloadingStart());
    Axios.post(`https://jsonplaceholder.typicode.com/todos`, {
        title: description,
        userId: 1,
        completed: false
    }).then(response => {
        dispatch(addTodo(description, priority)); // update store
        dispatch(dataloadedSuccess());
    }).catch(error => {
        console.log(error)
        dispatch(dataloadingFailure());
    });
}



export const fetchTodo = () => dispatch => {
    dispatch(dataloadingStart());
    var start = '';
    var end = '';
    start = (new Date()).getTime();
    Axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then(
            response => {
                end = (new Date()).getTime();
                console.log("Time taken by api in ms", end - start);
                let todoList = response.data.slice(0, 5);
                dispatch(addExistingTodo(addPriorityAndPrepareData(todoList)));// Supposed to do in a different method
                setTimeout(dispatch(dataloadedSuccess()), 3000)
            }
        )
        .catch(error => {
            console.log("Error!", error);
            dispatch(dataloadingFailure());
        })

}


export const setUpdatedTodo = (todoObj, newDesc, newPriority) => {
    return dispatch => {
        dispatch(dataloadingStart());
        Axios.post(`https://jsonplaceholder.typicode.com/todos`, {
            id: todoObj.id,
            title: newDesc,
            userId: 1,
            completed: todoObj.completed
        }).then(response => {
            dispatch(updateTodo(updateTodoWithUpdatedData(todoObj, newDesc, newPriority)))// update store
            setTimeout(dispatch(dataloadedSuccess()), 3000);
        }).catch(error => {
            console.log("Error!", error);
            dispatch(dataloadingFailure());
        });
    }
}