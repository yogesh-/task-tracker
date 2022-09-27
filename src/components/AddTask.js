import Button from "./Button";
import { useState } from "react";

const AddTask = ({onAdd}) => {
    const [data,setData] = useState({
        text:'',
        date:'',
        reminder:false
    })

    const submitDetails = (event) => {
        event.preventDefault(); 
        onAdd(data)
        setData({text:'',
        date:'',
        reminder:false})
        
        console.log('this is form data',data)

    }
    return (
        <form className="form" onSubmit={submitDetails}>
            <div className="form-control">
            <label htmlFor="task">Task</label><br/>
            <input id="task" type={"text"} placeholder={"Add Task"}
            value={data.text} onChange={(e)=>setData({...data,text: e.target.value})} />
            </div>

            <div className="form-control">
            <label>Date & Time</label><br/>
            <input type={"text"} placeholder={"Enter Date & Time"} 
            value={data.date} onChange={(e)=>setData({...data,date: e.target.value})} />
            </div>

            <div className="reminder-box">
            <label>Set Reminder</label>&nbsp;&nbsp;
            <input type={"checkbox"} defaultChecked={false}
            value={data.reminder} onChange={()=>setData({...data,reminder:!data.reminder})} />
            </div>

           <Button text="white" background="black" title={"Submit"}/>
           
            
        </form>
    )
}

export default AddTask