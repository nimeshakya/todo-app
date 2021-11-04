import React from 'react';

import Task from './Task';

const TaskList = ({ todos, setTodos, editTodo, setEditTodo }) => {
    if (todos.length > 0) {
        return (
            <ul>
                {todos.map((todo) => {
                    return (
                        <Task
                            key={todo.id}
                            todo={todo}
                            todos={todos}
                            setTodos={setTodos}
                            editTodo={editTodo}
                            setEditTodo={setEditTodo}
                        />
                    );
                })}
            </ul>
        );
    } else {
        return <p>Yay ! No more task left :)</p>;
    }
};

export default TaskList;
