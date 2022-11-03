

const AddTodo = (props) => {

    return ( 
    <div>
        <form onSubmit={props.handleTodoInput}>
        <input type='text' /><input type='submit' value='Add' />
        </form>
    </div>
    )
}

export default AddTodo