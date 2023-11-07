
import './App.css';
import { useState } from 'react';
import React from 'react';
function App() {
  const [toDoList, setTodoList] = useState([]);
  const [newList, setNewList] = useState("");
  const [startDate, setStartDate] = useState(null);
  
  const AddList = () => {
    const task = {
      id: toDoList.length === 0 ?  1 :  toDoList[toDoList.length - 1].id + 1,
      taskName: newList,
      completed: false,
      date: startDate
    }
    setTodoList([...toDoList, task])
  }

  const DeleteList = (id) => {
    setTodoList(toDoList.filter((task) => task.id !== id))
  }

  const CompleteList = (id) =>{
    setTodoList(toDoList.map((task) => {

      if(task.id === id){
        alert(task.taskName + " is Completed")
        return {...task, completed: true }
      }else{
        return task;
      }
    }))
  }

  return (

    <div className="App">
      <div className='TodoListInput'>
        <h1>TodoList</h1>
        <input placeholder='Add list' onChange={(e) => setNewList(e.target.value) } />
        <button onClick={AddList}>Add</button>
        <input className='date' type='date' onChange={(e) => setStartDate(e.target.value) } /> 
      </div>

      <div className='list'>
     {toDoList.map((task) => {
       return (
       <div className='list-content' style={{backgroundColor: task.completed  ? "lawngreen" : "white"}}> 
         <h1>{task.taskName}</h1>
         <button className='remove' onClick={() => DeleteList(task.id)}>Delete</button>
         <button className='completed' onClick={() => CompleteList(task.id)}>Completed</button>
         <button className='ddate' >{task.date}</button>
       </div>
       );
    })}
 </div>
      
    </div>
  

  );
}

export default App;
