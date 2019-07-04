import React, { PureComponent } from 'react';
import TodoList from '../component/TodoList';
import { connect } from 'react-redux';
import { editTodo } from '../actions/todoActions';

class TodoListContainer extends PureComponent {

    state = {
        todoToEdit: {}
    }

    setTodoEdited = (todoToEdit) => {
        this.setState({
            todoToEdit: todoToEdit
        });
    }

    handleEditAction = async (todoObj) => {
        await this.setTodoEdited(todoObj);
        this.props.editTodo(todoObj.id);
    }

    render() {
        return (
            <TodoList
                todoList={this.props.todoList}
                handleDelete={this.props.removeTodo}
                handleEditAction={this.handleEditAction}
                checkTodo={this.props.checkTodo}
                dataLoaded={this.props.dataLoaded}
                todoToEdit={this.state.todoToEdit}
            >
            </TodoList>);
    }
}
const mapDispatchToProps = {
    editTodo: (id) => editTodo(id),
}

export default connect(null, mapDispatchToProps)(TodoListContainer);