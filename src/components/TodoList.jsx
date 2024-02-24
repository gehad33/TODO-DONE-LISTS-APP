import AddTask from "./AddTask";
import Task from "./Task";
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {Card} from 'react-bootstrap';
import { useSelector } from "react-redux";


const TodoList = ()=>{
        
    const tasks = useSelector((state)=>state.todo)
    // console.log(tasks)
    
    return(
        <>

<Card className="text-center" border="info" >
    <Card.Header as="h5" >TODO LIST</Card.Header>
    <Card.Body>
        <Card.Text>
        Todays achivements starts with a plan.
        </Card.Text>
            

        
            
        <AddTask ></AddTask>
        {tasks.map((task)=>{
            return(<Task {...task} key={task.id} checked={task.completed} ></Task>)
            
        })}
        
        
    </Card.Body>
    </Card>

        </>
    )
}

export default TodoList;