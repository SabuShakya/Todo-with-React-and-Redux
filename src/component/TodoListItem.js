import React from 'react';
import TodoRow from './TodoRow';
import TodoRowFormContainer from '../container/TodoRowFormContainer';

const TodoListItem = ({ todoList, handleEditAction, handleDelete, checkTodo, todoToEdit }) => {
    return (
        <>
            {todoList.map(todo => (
                !todo.editing ?
                    <TodoRow
                        key={todo.id}
                        todo={todo}
                        handleDelete={handleDelete}
                        handleEditAction={handleEditAction}
                        checkTodo={checkTodo} /> :
                    <TodoRowFormContainer
                        key={todo.id}
                        todo={todo}
                        todoToEdit={todoToEdit}
                    />
            ))
            }
        </>);
}


export default TodoListItem;