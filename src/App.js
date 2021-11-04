import React, { useState, useEffect } from 'react';

import Input from './Components/Input';
import TaskList from './Components/TaskList';

const App = () => {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => {
        const todosData = localStorage.getItem('todos');
        if (todosData) {
            setTodos(JSON.parse(todosData));
        } else {
            setTodos([]);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <main>
            <h1>To-Do List</h1>
            <Input
                task={task}
                setTask={setTask}
                todos={todos}
                setTodos={setTodos}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
            />
            <TaskList
                task={task}
                setTask={setTask}
                todos={todos}
                setTodos={setTodos}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
            />
        </main>
    );
};

export default App;
