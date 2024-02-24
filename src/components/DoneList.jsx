import { useSelector } from "react-redux";
import Task from "./Task";
import AddTask from "./AddTask";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card} from 'react-bootstrap';

const DoneList = ()=>{
    const tasks= useSelector((state)=>state.todo)
    
    return(
        <>
        <Card className="text-center" border="info" >
        <Card.Header as="h5" >DONE LIST</Card.Header>
        <Card.Body>
        <Card.Text>
        Todays achivements.
        </Card.Text>
            
            <AddTask completed={true}></AddTask>
            
            {tasks.map((task)=>{
                if (task.completed===true){
                    return(<Task {...task} key={task.id} checked={task.completed}/>)
                }
                
                return task.completed===true
            })
            }
            

            </Card.Body>
            </Card>

        </>
    )
}

export default DoneList;