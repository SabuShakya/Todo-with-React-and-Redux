
export const addPriorityAndPrepareData = (todoList) => {
    return todoList.map(todo => {
        let obj = {
            id: todo.id,
            description: todo.title,
            priority: 'Medium',
            completed: todo.completed,
            editing: false
        }
        return obj;
    })
}

export const updateTodoWithUpdatedData = (todoObj, newDesc, newPriority) => {
    todoObj.description = newDesc;
    todoObj.priority = newPriority;
    todoObj.editing = false;

    return todoObj;
}