import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

const Task = ({ todo, todos, setTodos, editTodo, setEditTodo }) => {
    const handleDelete = (id) => {
        // finding the item to be removed, filter it out and updating the todos
        const updatedTodos = todos.filter((item) => item.id !== id);
        setTodos(updatedTodos);
    };

    const handleComplete = (id) => {
        // looping through the array of todos and if the id of item matches the parameter id update the item's completed property to false and vice versa
        const updatedTodos = todos.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    complete: !item.complete,
                };
            }
            return item;
        });
        setTodos(updatedTodos);
    };

    const handleEdit = (id) => {
        const editingItem = todos.find((item) => item.id === id);
        setEditTodo(editingItem);
    };

    return (
        <li>
            <span
                className='task-name'
                style={{
                    textDecoration: todo.complete ? 'line-through' : 'none',
                }}
            >
                {todo.name}
            </span>
            <span className='action-btn-container'>
                <span
                    className='action-btn'
                    onClick={() => handleComplete(todo.id)}
                >
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span
                    className='action-btn'
                    onClick={() => handleEdit(todo.id)}
                >
                    <FontAwesomeIcon icon={faEdit} />
                </span>
                <span
                    className='action-btn'
                    onClick={() => handleDelete(todo.id)}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </span>
        </li>
    );
};

export default Task;
