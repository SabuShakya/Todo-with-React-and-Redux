import React from 'react';

const TodoList = (props) => {
    return (
        <div align="center">
            {props.todoList.length > 0 &&
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Todo Description</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.todoList.map(todo => (
                            <tr key={todo.id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        name={todo.description}
                                        value={todo.completed}
                                        onChange={() => props.checkTodo(todo.id)}
                                    />
                                </td>
                                <td>{todo.description}</td>
                                <td>{todo.priority}</td>
                                <td>{todo.completed ? 'Completed' : 'Pending'}</td>
                                <td><button onClick={() => props.handleDelete(todo.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
        </div>
    );
}

export default TodoList;