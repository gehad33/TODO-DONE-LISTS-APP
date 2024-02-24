import "bootstrap/dist/css/bootstrap.min.css";
import {Card} from 'react-bootstrap';
const AboutPage =()=>{

    return(
        <>
        <Card className="text-center" border="info" >
        <Card.Header as="h5" >About APP</Card.Header>
        <Card.Body>
            <Card.Title>TODO LIST && DONE LIST</Card.Title>
            <Card.Text>
            
            The app is 2 in 1, a normal todo list app where anyone can add there plan
            segments as todos, and the second part is the done list for people who add 
            saving the universe or travelling to mars as tasks and then get overwhelmed
            before doing anything so a done list is a better obtion for them.
            </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default AboutPage;