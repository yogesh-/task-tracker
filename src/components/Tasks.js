import Task from "./Task"

const Tasks = ({tasks,onDelete,onToggle}) => {

    return <div>
         {tasks.map((item)=> 
            <Task key={item.id} task={item} onDelete={onDelete} onToggle={onToggle}/>
            
         )}
        
    </div>
}

export default Tasks
