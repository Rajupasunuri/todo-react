const  TodoList=({todoList})=>{
    return(
        <div>
            {
                todoList.map((todo,index)=>
                    <div key={index}>
                      <h5>{todo} &nbsp; <button>Delete</button></h5>    
                     </div>
                )
            }
        </div>
    )
}
export default TodoList;