function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { value: action.payload }];
        case 'DELETE_TODO':
            return state.filter(todo => todo.value !== action.payload);
        case 'UPDATE_TODO':
            return state.map(todo => 
                todo.value === action.payload.oldValue 
                ? { value: action.payload.newValue } 
                : todo
            );
        default:
            return state;
    }
}

export default todoReducer;