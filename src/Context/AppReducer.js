const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };

        case 'DELETE_TASK':
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== action.payload),
            };

        case 'DONE_TASK':
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id === action.payload) {
                        item.complete = !item.complete;
                        return item;
                    } else {
                        return item;
                    }
                }),
            };

        case 'EDIT_TASK':
            return {
                ...state,
                editingTask: state.todos.find(
                    (item) => item.id === action.payload
                ),
            };

        case 'UPDATE_TASK':
            return {
                ...state,
                todos: state.todos.map((item) =>
                    item.id === action.payload.id
                        ? {
                              name: action.payload.taskName,
                              id: action.payload.id,
                              complete: action.payload.complete,
                          }
                        : item
                ),
                editingTask: '',
            };

        default:
            return state;
    }
};

export default AppReducer;
