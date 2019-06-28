import React, { PureComponent } from 'react';
import TodoList from '../component/TodoList';

class TodoListContainer extends PureComponent {
    render() {
        return (
            <TodoList
                todoList={this.props.todoList}
                handleDelete={this.props.removeTodo}
                checkTodo={this.props.checkTodo}>
            </TodoList>);
    }
}

export default TodoListContainer;