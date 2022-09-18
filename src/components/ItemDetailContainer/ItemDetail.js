import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ItemCount from '../Counter/ItemCount'
import {useState, useContext} from 'react'
import { CartContext } from '../Cart/CartContext.js'
import { Link } from 'react-router-dom'

 
const ItemDetail = ({item}) => {

  const{cart, addToCart, isInCart} = useContext(CartContext);
  console.log(cart)
  const [cantidad, setCantidad] = useState(0) 


  const handleAgregar= ()=>{
        
        const itemToCart ={
          id: item.id,
          precio: item.price,
          nombre: item.name,
          cantidad

        }
        isInCart(item.id)
       addToCart(itemToCart)
  }

    return(
        <Card className="col-md-4 m-1">
        <Card.Img className='top' alt='imagen' src={item.img} />
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
        {
        isInCart(item.id)
        ?
          <Link className="btn btn-primary"  to={"/cart"} >Terminar compra</Link>
          
        :
          <ItemCount 
                max={item.quantity}
                counter={cantidad}
                setCounter = {setCantidad}
                handleAgregar = {handleAgregar}
          />
        }
        
      
           
          </Row>
              
        </Card.Footer>
      </Card>
        

        

    )



}
export default ItemDetail