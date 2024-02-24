import { useState } from "react"
import "../App.css";
import  {useDispatch}  from "react-redux";
import {ADD_TASK} from "../redux/types"

const AddTask = (props)=>{

    const {completed}= props;
    const [task, setTasks] = useState({
        taskName:"",
        completed:completed
    })

    const dispatch = useDispatch()

    const handleSubmit =(event)=>{
        event.preventDefault()
        // console.log(event)
        dispatch({type:ADD_TASK,payload:task})
        setTasks({
            taskName:"",
            completed:completed
        })
    }
    const handleChange=(event)=>{ 
        setTasks(oldTasks=>({...oldTasks, [event.target.name]: event.target.value})) 
    }


return(
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" id="writeTask" name="taskName" value={task.taskName} onChange={handleChange}
        style={{width: "500px", borderColor:"grey", borderWidth:"1px", borderRadius:"5px", margin:"10px"}}  
        />
        <input type="submit" id="submitBtn" name="Submit" value="ADD"
        style={{}}
        />
    </form>

    
    </>
)
}

export default AddTask;