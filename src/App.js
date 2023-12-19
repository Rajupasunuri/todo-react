//import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import TodoList from './TodoList';
import Navbar from './Navbar';

function App() {
  const [task,setTask]= useState("");
  const [todos,setTodos]=useState([])
  const changeHandler= e=>{
    setTask(e.target.value)
  }
  const submitHandler=e=>{
    e.preventDefault();
    const newTodo=[...todos,task]
    setTodos(newTodo)
    setTask("");
  }
  return (
    <>
    <h1 className="text">welcome</h1>
    <form onSubmit={submitHandler}>
    <input type='text' name='task' value={task} onChange={changeHandler}/>&nbsp;
    <input type='submit' value='add'/>
    </form>
    <TodoList todoList={todos}/>
    <Navbar/>
    </>
  );
}

export default App;
