import { useState } from 'react';
import {  Button, Card} from 'react-bootstrap';
import '../../App.css';
import { Link } from 'react-router-dom';

function JobsManuComp(params) {


    const [user ]= useState(
        JSON.parse(sessionStorage.user)||''
    );



    return (
        <>
            <Card className="Card">
                <Card.Body>
                    <Card.Title>Hello {user.first_name}</Card.Title>
                    <Card.Text>
                      please select your position

                    </Card.Text>
                   <Link to="/managerpage"> <Button>Shift manager</Button></Link>
                   <Link to="/sellerpage"> <Button>Seller</Button></Link>

                </Card.Body>
            </Card>
        </>
    )
}
export default JobsManuComp;
