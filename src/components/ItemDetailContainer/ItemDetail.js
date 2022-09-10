import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';
import ItemCount from '../Counter/ItemCount.js'
import useState from 'react'

const ItemDetail = ({item}) => {


  const [cantidad, setCantidad] = useState(1)


  const handleAgregar= ()=>{
        
        console.log({
        ...item,
        cantidad
        })
  }

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
            <ItemCount 
            max={item.quantity}
            counter={cantidad}
            setCounter = {setCantidad}
            handleAgregar = {handleAgregar}
            />
            <Link className="btn btn-primary" onClick={handleAgregar} to={`/item/Cart`}>Ver mas</Link>
                </Row>
        </Card.Footer>
      </Card>
        

        

    )



}
export default ItemDetail