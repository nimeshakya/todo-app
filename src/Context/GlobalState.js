import React, { useReducer } from 'react';

import AppReducer from './AppReducer';

const initialState = {
    todos: [
        { id: 1, name: 'walk dogs', complete: false },
        { id: 2, name: 'read book', complete: false },
        { id: 3, name: 'finish project', complete: false },
    ],
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions

    return (
        <GlobalContext.Provider value={{ todos: state.todos }}>
            {children}
        </GlobalContext.Provider>
    );
};
