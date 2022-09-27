import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from "react"


function App() {
  const [showForm,setShowForm] = useState(false)
  const [task,setTask] = useState([{
    id:1,
    text:"Take an Appointment",
    date:"5th Aug 2022 10:12 AM",
    reminder:true
},
{
    id:2,
    text:"Study Nodejs",
    date:"5th Aug 2022 10:12 AM",
    reminder:true
},
{
    id:3,
    text:"Go for shopping",
    date:"5th Aug 2022 10:12 AM",
    reminder:true
}])

// Delete a task from the window.

const  deleteTask = (id) => {
  console.log('deleted',id)
  setTask(task.filter((item)=>item.id !== id))
}

// Set or unset reminders.

const toggleReminder = (id) => {
  console.log(id)
  setTask(task.map((item)=>item.id === id ? {...item, reminder:!item.reminder}: item))

}

const addDetails = (data) => {
const id = Math.floor(Math.random()*100)+1
const newTask = {id,...data}
setTask([...task,newTask])
}



  return (
    <div className='App'>
    <Header title={"Task Tracker"} formButton={()=>setShowForm(!showForm)} btnState={showForm}/>
    {showForm && <AddTask onAdd={addDetails}/>}
    {task.length > 0 ? <Tasks tasks={task} onDelete={deleteTask} onToggle={toggleReminder}/> : 'Add some tasks'}
    </div>
  );
}

export default App;
