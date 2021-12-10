import React, { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

import { GlobalContext } from '../Context/GlobalState';

const Task = ({ todo }) => {
    const { deleteTask, doneTask, editTask } = useContext(GlobalContext);
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
                <span className='action-btn'>
                    <FontAwesomeIcon
                        icon={faCheck}
                        onClick={() => doneTask(todo.id)}
                    />
                </span>
                <span className='action-btn'>
                    <FontAwesomeIcon
                        icon={faEdit}
                        onClick={() => {
                            editTask(todo.id);
                        }}
                    />
                </span>
                <span className='action-btn'>
                    <FontAwesomeIcon
                        icon={faTimes}
                        onClick={() => {
                            deleteTask(todo.id);
                        }}
                    />
                </span>
            </span>
        </li>
    );
};

export default Task;
