import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ItemCount from '../Counter/ItemCount.js'

const Item = ({producto}) => {


    return(
        <Card className="my-2 col-md-3">
        <Card.Img variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title>{producto.name}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Row>
          
          <Col>
          <small className="text-muted">$ {producto.price}</small>
          </Col>
          
          <Col>          
          <small>
        <p className="text-muted">Quedan {producto.quantity}</p>
            </small>
            </Col>
            </Row>
            <Row>
            <ItemCount/>
                </Row>
        </Card.Footer>
      </Card>
        

        

    )



}
export default Item