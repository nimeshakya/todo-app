import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

const Task = ({ todo }) => {
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
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className='action-btn'>
                    <FontAwesomeIcon icon={faEdit} />
                </span>
                <span className='action-btn'>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </span>
        </li>
    );
};

export default Task;
