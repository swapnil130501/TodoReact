// function todoReducer(state, action) {
//     console.log(state, action)
//     switch (action.type) {
//         case 'ADD_TODO':
//             return [...state, { value: action.payload }];
//         case 'DELETE_TODO':
//             return state.filter(todo => todo.value !== action.payload);
//         case 'UPDATE_TODO':
//             return state.map(todo => 
//                 todo.value === action.payload.oldValue 
//                 ? { value: action.payload.newValue } 
//                 : todo
//             );
//         default:
//             return state;
//     }
// }

// export default todoReducer;

function todoReducer(state, action) {
    if (action.type === 'ADD_TODO') {
        return [...state, { value: action.payload }];
    } 

    else if (action.type === 'DELETE_TODO') {
        return state.filter((todo) => todo.value !== action.payload);
    } 

    else if (action.type === 'UPDATE_TODO') {
        return state.map((todo) =>
            todo.value === action.payload.oldValue 
                ? { value: action.payload.newValue } 
                : todo
        );
    } 
    
    else {
        return state; 
    }
}

export default todoReducer;
