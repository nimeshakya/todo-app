import React from 'react';

import Task from './Task';
import { GlobalContext } from '../Context/GlobalState';

const TaskList = () => {
    const { todos } = React.useContext(GlobalContext);
    if (todos.length > 0) {
        return (
            <ul>
                {todos.map((todo) => {
                    return <Task key={todo.id} todo={todo} />;
                })}
            </ul>
        );
    } else {
        return <p>Yay ! No more task left :)</p>;
    }
};

export default TaskList;
