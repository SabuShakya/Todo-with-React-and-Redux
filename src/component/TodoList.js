import React from 'react';
import PacManLoader from './PacManLoader';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, checkTodo, handleDelete, handleEditAction, dataLoaded, todoToEdit }) => {

    const todoListBlock = (
        <div align="center">
            {todoList.length > 0 &&
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Todo Description</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TodoListItem
                            todoList={todoList}
                            handleDelete={handleDelete}
                            handleEditAction={handleEditAction}
                            checkTodo={checkTodo}
                            todoToEdit={todoToEdit}
                        />
                    </tbody>
                </table>}
        </div>);

    return (
        <div align="center">
            {dataLoaded ? todoListBlock : <PacManLoader />}
        </div>
    );
}

export default TodoList;