import { useReducer } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const initialState = {
    todoList: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'todoAdd':
            return {
                ...state,
                todoList: state.todoList.concat(action.payload)
            }
        case 'todoChange':
            return {
                ...state,
                todoList: action.payload
            }
        default:
            throw new Error();
    };
}

const TodoParent = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleTodoInput = (e) => {
        e.preventDefault();
        
        const value = {text: e.target[0].value, done:false};
        dispatch({
            type: 'todoAdd',
            payload: value
        })
    }
    const onCheck = (id) => {
        
        const newTodoList = state.todoList.map((todo, i) => {
            if (id === i){
                todo.done = !todo.done
            }
            return todo
        })
        const value = newTodoList
        dispatch({
            type: 'todoChange',
            payload: value
        })
    }
    const onDelete = (id) => {

        const newTodoList = state.todoList.filter((todo, i) => {
            return (i !== id)
        })
        const value = newTodoList
        dispatch({
            type: 'todoChange',
            payload: value
            })
    }
    return(
        <div>
            <AddTodo handleTodoInput={handleTodoInput} />
            <TodoList todoList = {state.todoList} onCheck={onCheck} onDelete={onDelete}/>
        </div>
    )
}

export default TodoParent