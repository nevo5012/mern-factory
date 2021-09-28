 import { Card, Col, Button, Row } from 'react-bootstrap';
import '../../App.css';

function SellerPageComp(params) {


    return (
        <>
            <Card  >

                <Card.Header>
                    <Card.Title>Seller Page</Card.Title>
                </Card.Header>
                <Card.Body>


                    <Card.Text>
                        This is a seller page
                    </Card.Text>
                </Card.Body>
            </Card>
            <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Button>price 10$</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
        </>
    )
}
export default SellerPageComp;
