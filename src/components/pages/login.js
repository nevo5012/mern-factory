import { useState } from 'react';
import loginUtils from '../utils/loginUtils';
import { Alert, Button, Card, Form, ListGroup } from 'react-bootstrap';
import '../../App.css';

function LoginComp(params) {
    const [id, setId] = useState("");
    const [worngId, setWorngId] = useState(null);
    const [, setUser] = useState();

    const sendForm = async (e) => {
        e.preventDefault();
        setWorngId(false)

        loginUtils.getById(id).then((resp) => {
            let u = resp

            if (u === null) {
                setWorngId(true)
            }
            else {

                sessionStorage.setItem("user", JSON.stringify(u))
                setUser(u)

                if (u.role[0] === "manager") {
                    window.location.assign('/jobsmanu')
                }
                else {
                    window.location.assign('/sellerpage')
                }
            }
        })
    }
    return (
        <div className="Card">
            <Card >
                <Card.Body>
                    <Card.Title>Login </Card.Title>
                    <Alert style={{ display: worngId ? 'block' : 'none' }} variant="danger">
                        Worng ID, Please try again.
                    </Alert>
                    <Form onSubmit={sendForm}>
                        <Form.Label>  Enter your ID number</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            maxLength="9"
                            minLength="8"
                            onChange={e => setId(e.target.value)}
                            placeholder="310557719"
                        />
                        <br />
                        <Button variant="primary" type="submit" >Login</Button>
                    </Form>
                </Card.Body>
            </Card>
            <ListGroup>
                <ListGroup.Item variant="primary">
                    ID list 
                </ListGroup.Item>
                <ListGroup.Item action>
                    Shift manager example - 022543345
                </ListGroup.Item>
                <ListGroup.Item action>
                    Seller example - 316543210
                </ListGroup.Item>
            </ListGroup>


        </div>
    );
}


export default LoginComp;