import React from 'react';

const TodoRow = ({ todo, checkTodo, handleDelete, handleEditAction }) => {
    return (
        <tr>
            <td>
                <input
                    type="checkbox"
                    name={todo.description}
                    value={todo.completed}
                    checked={todo.completed}
                    onChange={() => checkTodo(todo.id)}
                />
            </td>
            <td>{todo.description}</td>
            <td>{todo.priority}</td>
            <td>{todo.completed ? 'Completed' : 'Pending'}</td>
            <td>
                <button
                    className="btnEdit"
                    onClick={() => handleEditAction(todo)}>
                    <i className="fa fa-edit"></i>
                </button>
                <div className="divider"></div>
                <button
                    className="btnDelete"
                    onClick={() => handleDelete(todo.id)}>
                    <i className="fa fa-trash"></i>
                </button>
            </td>
        </tr>
    );
}

export default TodoRow;