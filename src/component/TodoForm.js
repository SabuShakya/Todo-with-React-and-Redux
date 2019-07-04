import React from 'react';

const TodoForm = ({ description, priority, handleDescriptionChange, handlePriorityChange, handleAddTodo }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>TO DO</h1>
            <hr />
            <input
                type="text"
                name="todo"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Enter your todo" />
            <select
                value={priority}
                onChange={handlePriorityChange}>
                <option defaultValue="Select Priority" hidden>Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button
                className={'button button1'}
                onClick={(description !== '' && priority !== '') ? (() => handleAddTodo(description, priority)) : (() => { })}>
                Add Todo
            </button>
            <br />
            <hr />
        </div>
    );
}

export default TodoForm;