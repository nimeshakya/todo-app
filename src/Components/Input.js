import React, { useState, useContext, useEffect } from 'react';

import { GlobalContext } from '../Context/GlobalState';

const Input = () => {
    const [task, setTask] = useState('');

    const { addTask, editingTask, updateTask } = useContext(GlobalContext);

    // put the editing task name in input field
    useEffect(() => {
        editingTask ? setTask(editingTask.name) : setTask('');
    }, [editingTask, setTask]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            id: new Date().getTime(),
            name: task,
            complete: false,
        };

        if (!editingTask) {
            addTask(newTask);
            setTask('');
        } else {
            updateTask(task, editingTask.id, editingTask.complete);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder='eg. walk dogs...'
                autoFocus
                required
            />
            <button type='submit'>{editingTask ? 'Edit' : 'Add'}</button>
        </form>
    );
};

export default Input;
