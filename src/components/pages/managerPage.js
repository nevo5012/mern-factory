import { Card, Col, Placeholder, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../App.css';

function ManagerPageComp(params) {



    return (
        <>
            <Card  >
                <Card.Header>
                    <Card.Title>Manager Page</Card.Title>
                </Card.Header>
            </Card>
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                       manager option will be here 
                    </Card.Text>
                    <Link to="/jobsmanu"> <Button>Go back to jobs manu</Button></Link>
                </Card.Body>
                <Card.Footer className="text-muted">manager manu</Card.Footer>
            </Card>
            
        </>
    )
}
export default ManagerPageComp;
