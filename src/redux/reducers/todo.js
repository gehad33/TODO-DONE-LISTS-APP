import {ADD_TASK, DELETE_TASK, IS_COMPLETED} from "../types"
import { v4 as uuid } from 'uuid';


const intialData =[
    {
        id:"1",
        taskName:"Go to Market",
        completed: false
    },
    {
        id:"2",
        taskName:"wash Laundry",
        completed: true
    }
]

const reducer =(state=intialData, action)=>{
    switch (action.type){
        case ADD_TASK:
            if(action.payload.completed){
            return ([{id:uuid(),...action.payload,completed:true},...state]);
            }
            else{
                return ([{id:uuid(),...action.payload,completed:false},...state]);
            }
        
        case DELETE_TASK:
            return (state.filter((task)=>{
                    return task.id !== action.payload
                }))

        case IS_COMPLETED:
            const element = action.payload
            const ee= document.getElementById(element.className)
            
            state.map((task)=>{
                
                if(task.id === element.className){
                    
                    if (element.checked ){
                        task.completed= true
                        ee.style.backgroundColor="#d1e7dd"
                    }
                    else {
                        task.completed= false
                        ee.style.backgroundColor= "#ced4da"

                    }
                    // console.log(state)
                    const newTask = task
                    return newTask
                }
                else{
                    
                    return task
                }
                
            })
            
            return state

        default:
            return state
    }
}

export default reducer;