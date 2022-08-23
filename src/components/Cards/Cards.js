import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

function GroupExample(props) {


  return (
    <Col className='container col-md-8 m-3 mt-5'>
    <CardGroup >
      <Card>
        <Card.Img variant="top" src='./assets/absoluts.png' />
        <Card.Body>
          <Card.Title>{props.bebida1}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer><Row>
          <Col>
          <small className="text-muted">$ 2000,00</small></Col><Col>
          <small><Button size='sm' variant="outline-secondary">Agregar</Button></small></Col></Row>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="./assets/absoluts.png" />
        <Card.Body>
          <Card.Title>{props.bebida2}</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional.
          </Card.Text>
        </Card.Body>
        <Card.Footer><Row>
          <Col>
          <small className="text-muted">$ 4600,00</small></Col><Col>
          <small><Button size='sm' variant="outline-secondary">Agregar</Button></small></Col></Row>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="./assets/absoluts.png" />
        <Card.Body>
          <Card.Title>Sheridans</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer><Row>
          <Col>
          <small className="text-muted">$ 8700,00</small></Col><Col>
          <small><Button size='sm' variant="outline-secondary">Agregar</Button></small></Col></Row>
        </Card.Footer>
      </Card>
    </CardGroup></Col>
  );
}

export default GroupExample;