import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';


const Item = ({producto}) => {


    return(
      <div className="container col-md-3">
        <Card className="m-2">
        <Card.Img className="shadow rounded my-2" variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title>{producto.name}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="rounded border mb-2 shadow">
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
            <Link className="btn btn-secondary" to={`/item/${producto.id}`}>Ver mas</Link>
                </Row>
        </Card.Footer>
      </Card>
      </div>

        

    )



}
export default Item