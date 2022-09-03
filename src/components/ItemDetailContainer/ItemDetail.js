import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ItemCount from '../Counter/ItemCount.js'

const ItemDetail = ({item}) => {


    return(
        <Card className="col-md-4 m-1">
        <img className='top' alt='imagen' src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Row>
          
          <Col>
          <small className="text-muted">$ {item.price}</small>
          </Col>
          
          <Col>          
          <small>
        <p className="text-muted">Quedan {item.quantity}</p>
            </small>
            </Col>
            </Row>
            <Row>
            <ItemCount/>
            <Button variant="secondary">Agregar al carrito</Button>
                </Row>
        </Card.Footer>
      </Card>
        

        

    )



}
export default ItemDetail