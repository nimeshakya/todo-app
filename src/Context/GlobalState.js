import React, { useReducer } from 'react';
import { useEffect } from 'react/cjs/react.development';

import AppReducer from './AppReducer';

const initialState = {
    todos: [],
    editingTask: '',
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState, () => {
        const localData = localStorage.getItem('appData');
        return localData ? JSON.parse(localData) : initialState;
    });

    useEffect(() => {
        localStorage.setItem('appData', JSON.stringify(state));
    }, [state]);

    // Actions
    const addTask = (task) => {
        dispatch({
            type: 'ADD_TASK',
            payload: task,
        });
    };

    const deleteTask = (id) => {
        dispatch({
            type: 'DELETE_TASK',
            payload: id,
        });
    };

    const doneTask = (id) => {
        dispatch({
            type: 'DONE_TASK',
            payload: id,
        });
    };

    const editTask = (id) => {
        dispatch({
            type: 'EDIT_TASK',
            payload: id,
        });
    };

    const updateTask = (taskName, id, complete) => {
        dispatch({
            type: 'UPDATE_TASK',
            payload: { taskName, id, complete },
        });
    };

    return (
        <GlobalContext.Provider
            value={{
                todos: state.todos,
                editingTask: state.editingTask,
                addTask,
                deleteTask,
                doneTask,
                editTask,
                updateTask,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
