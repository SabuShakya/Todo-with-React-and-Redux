import React, { PureComponent } from 'react';
import TodoFormContainer from './TodoFormContainer';
import TodoListContainer from './TodoListContainer';
import { connect } from 'react-redux';
import { addTodo, removeTodo, checkTodo } from '../actions/todoActions';

class TodoContainer extends PureComponent {

    render() {
        return (
            <div>
                <TodoFormContainer
                    addTodo={this.props.addTodo} />
                <TodoListContainer
                    todoList={this.props.todos}
                    removeTodo={this.props.removeTodo}
                    checkTodo={this.props.checkTodo} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = {
    addTodo: (desc, prio) => addTodo(desc, prio),
    removeTodo: (id) => removeTodo(id),
    checkTodo: (id) => checkTodo(id)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);