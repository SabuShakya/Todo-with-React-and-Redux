import React, { PureComponent } from 'react';
import TodoRowForm from '../component/TodoRowForm';
import { connect } from 'react-redux';
import { cancelEdit } from '../actions/todoActions'
import { setUpdatedTodo } from '../middleware/todoThunkActions';

class TodoRowFormContainer extends PureComponent {
    state = {
        description: this.props.todoToEdit.description,
        priority: this.props.todoToEdit.priority
    }

    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        });
    }

    handlePriorityChange = (event) => {
        this.setState({
            priority: event.target.value
        });
    }

    handleUpdateTodo = (todoObj) => {
        this.props.setUpdatedTodo(todoObj, this.state.description, this.state.priority);
    }

    render() {
        return (
            <TodoRowForm
                todo={this.props.todo}
                description={this.state.description}
                priority={this.state.priority}
                handleDescriptionChange={this.handleDescriptionChange}
                handlePriorityChange={this.handlePriorityChange}
                handleEditCancel={this.props.cancelEdit}
                handleUpdateTodo={this.handleUpdateTodo}
            />)
    }
}
const mapDispatchToProps = {
    cancelEdit: (id) => cancelEdit(id),
    setUpdatedTodo
}

export default connect(null, mapDispatchToProps)(TodoRowFormContainer);