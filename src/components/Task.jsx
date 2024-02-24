import "../App.css"
import { useDispatch } from "react-redux";
import {DELETE_TASK, IS_COMPLETED} from "../redux/types"
import { useEffect } from "react";

const Task =(props)=>{
    
    const {id,taskName,checked}=props
    
    const dispatch = useDispatch()

    const handleClick = (event)=>{
        const id = event.target.className
        dispatch({type:DELETE_TASK, payload:id})
    }

    const handleCheck = (e)=>{
        const element= e.target
        // console.log("boo")
        dispatch({type:IS_COMPLETED, payload:element})
        
    }

    useEffect(()=>{
        const ee= document.getElementById(id)
        const che= document.getElementById(id+1)
        if (checked) {
            che.checked = true
            ee.style.backgroundColor = "#d1e7dd"
        }
        else{
            che.checked = false
            ee.style.backgroundColor = "#ced4da";
        };
    })


    return(
        <>
        <div className="tasktag" id={id}  >
            <div className="theTask"> 
            <input type="checkbox" name="checkk" id={id+1} className={id} onClick={handleCheck} />
            <div >{taskName}</div>
            </div>

            <button className={id} onClick={handleClick} id="deletebtn">Delete</button>
        </div>
        </>
        
    )
}

export default Task;