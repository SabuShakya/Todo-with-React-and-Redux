import React, { PureComponent } from 'react';
import TodoFormContainer from './TodoFormContainer';
import TodoListContainer from './TodoListContainer';
import { connect } from 'react-redux';
import { removeTodo, checkTodo } from '../actions/todoActions';
import { persistTodo, fetchTodo } from '../middleware/todoThunkActions';

class TodoContainer extends PureComponent {

    componentDidMount() {
        this.props.fetchTodo();

    }
    render() {
        return (
            <div>
                <TodoFormContainer
                    saveTodo={this.props.saveTodo} />
                <TodoListContainer
                    todoList={this.props.todos}
                    removeTodo={this.props.removeTodo}
                    checkTodo={this.props.checkTodo}
                    errorMessage={this.props.errorMessage}
                    dataLoaded={this.props.dataLoaded} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        dataLoaded: state.dataLoaded,
        errorMessage: state.errorMessage
    }
}

const mapDispatchToProps = {
    saveTodo: (desc, prio) => persistTodo(desc, prio),
    removeTodo: (id) => removeTodo(id),
    checkTodo: (id) => checkTodo(id),
    fetchTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);