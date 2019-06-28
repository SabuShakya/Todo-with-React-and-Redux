import React, { PureComponent } from 'react';
import TodoForm from '../component/TodoForm';

class TodoFormContainer extends PureComponent {
    state = {
        description: '',
        priority: ''
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

    handleAddTodo = (description, priority) => {
        this.props.addTodo(description, priority);
        this.resetLocalState();
    }

    resetLocalState = () => {
        this.setState({
            description: '',
            priority: ''
        })
    }

    render() {
        return (
                <TodoForm
                    description={this.state.description}
                    priority={this.state.priority}
                    handleDescriptionChange={this.handleDescriptionChange}
                    handlePriorityChange={this.handlePriorityChange}
                    handleAddTodo={this.handleAddTodo}>
                </TodoForm>
            );
    }
}

export default TodoFormContainer;