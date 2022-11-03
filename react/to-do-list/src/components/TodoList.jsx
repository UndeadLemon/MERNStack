

const TodoList = (props) => {
    const todoMap = (todo, i) => {
        let style='none'
        if(todo.done){
            style='line-through'
        }
        else{
            style='none'
        }
        return(
        <li key={i}>
            <span style={{textDecoration:style}}>{todo.text}</span> <input key={i} type='checkbox' checked={todo.done} onChange={(e) => props.onCheck(i)} /><button onClick={(e) => props.onDelete(i)}>Delete</button>
        </li>
        )
    }
    return(
        <div>
            <ul>
            {props.todoList.map(todoMap)}
            </ul>
        </div>
    )
}

export default TodoList