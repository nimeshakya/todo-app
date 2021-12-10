import React from 'react';

import Input from './Components/Input';
import TaskList from './Components/TaskList';

import { GlobalProvider } from './Context/GlobalState';

const App = () => {
    return (
        <GlobalProvider>
            <main>
                <h1>To-Do List</h1>
                <Input />
                <TaskList />
            </main>
        </GlobalProvider>
    );
};

export default App;
