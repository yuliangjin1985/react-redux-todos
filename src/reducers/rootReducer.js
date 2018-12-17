import { ADD_TODO, REMOVE_TODO, addTodo, removeTodo } from '../actions/actionCreater';

const initialState = {
    todos: [],
    id: 0
}

export default function rootReduce(state = initialState, action) {
    // debugger;
   switch(action.type) {
    case ADD_TODO: 
        let newState = {...state};
        newState.id++;
        const temp = {
            ...newState,
            todos: [...newState.todos, {task: action.task, id: newState.id}]
        };
        // debugger;
        return temp;
    case REMOVE_TODO:
        const tempState = {...state};
        let todos = tempState.todos.filter(todo => todo.id !== action.id);
        return {
            ...tempState,
            todos
        };
    default:
        return state;
   }
}