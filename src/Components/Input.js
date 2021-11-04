import React, { useEffect } from 'react';

const Input = ({ task, setTask, todos, setTodos, editTodo, setEditTodo }) => {
    const updateTodo = (taskName, id, complete) => {
        const newTodos = todos.map((item) =>
            item.id === id ? { name: taskName, id, complete } : item
        );

        setTodos(newTodos);
        setEditTodo('');
    };

    // Put the editing task name in input field
    useEffect(() => {
        editTodo ? setTask(editTodo.name) : setTask('');
    }, [editTodo, setTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: new Date().getTime(),
            name: task,
            complete: false,
        };

        // if we're not editing the item, simply "add" the item to list else update the existing item according to edit
        if (!editTodo) {
            setTodos([...todos, newTask]);
            setTask('');
        } else {
            updateTodo(task, editTodo.id, editTodo.complete);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder='eg. walk dogs...'
                required
            />
            <button type='submit'>{editTodo ? 'Edit' : 'Add'}</button>
        </form>
    );
};

export default Input;
