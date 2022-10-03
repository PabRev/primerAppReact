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
      <Row>
        <Col className='col-md-4'>
        <Card className="m-1">
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
                             <small><p className="text-muted">Quedan {item.quantity}</p></small>
                          </Col>
                    </Row>


                    <Row>
                        {isInCart(item.id)
                          ?

                          <div className='d-flex'>
                          
                          <Link className="btn btn-primary m-1"  to={"/cart"} >Terminar compra</Link>
                          
                          
                          <Link className="btn btn-secondary m-1"  to={"/"} >Seguir comprando</Link>
                          
                          </div>

                          

                          :
                          <ItemCount 
                                max={item.quantity}
                                counter={cantidad}
                                setCounter = {setCantidad}
                                handleAgregar = {handleAgregar}
                          />}
                                 
                    </Row>
                      
                </Card.Footer>
      </Card>
      </Col>

      <Col className="col-md-7">
      <div class="bg-light p-3 rounded border">
        <p class="text-dark text-muted">
          <strong>Caracteristicas del producto:</strong><br/>
        Lorem ipsum dolor sit amet consectetur adipiscing elit quam nostra odio fames, dictumst habitant penatibus vivamus magnis ut tortor volutpat vel. Cras pulvinar metus consequat eleifend fames fringilla gravida sociis nam ultricies, dui bibendum fusce porttitor magnis taciti dictum venenatis mollis turpis sociosqu.
        
        </p><hr/>
        <ul class="text-muted"><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li> <li>Rutrum quisque conubia aliquet morbi, mattis montes pellentesque.</li> <li>Tellus odio ultrices et facilisi sagittis, volutpat semper enim.</li></ul>
      </div>
      </Col>
      </Row>
        

        

    )



}
export default ItemDetail