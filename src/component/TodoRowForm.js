import React from 'react';

const TodoRowForm = ({ todo, description, priority, handleEditCancel, handleDescriptionChange, handlePriorityChange, handleUpdateTodo }) => {
    return (
        <tr>
            <td></td>
            <td><input
                type="text"
                name="todo"
                value={description}
                placeholder="Enter your todo"
                onChange={handleDescriptionChange} />
            </td>
            <td><select
                value={priority}
                onChange={handlePriorityChange}>
                <option defaultValue="Select Priority" hidden>Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select></td>
            <td></td>
            <td>
                <button
                    className="btnEdit"
                    onClick={() => handleUpdateTodo(todo)}>
                    <i className="fa fa-check"></i>
                </button>
                <div className="divider"></div>
                <button
                    onClick={() => handleEditCancel(todo.id)}
                    className="btnDelete"
                >
                    <i className="fa fa-close"></i>
                </button>
            </td>
        </tr>
    );
}

export default TodoRowForm;