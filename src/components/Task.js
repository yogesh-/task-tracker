import { VscChromeClose } from "react-icons/vsc";


const Task = ({task,onDelete,onToggle}) => { 
    
return <div className={`task ${ task.reminder ? 'reminder': null}`} onDoubleClick={()=>onToggle(task.id)}>
    <div>
    <h4>{task.text}</h4>
    <p>{task.date}</p>
    </div>
    <VscChromeClose style={{color:'red',cursor:'pointer'}} onClick={()=>onDelete(task.id)}/>
    
    
</div>
}

export default Task