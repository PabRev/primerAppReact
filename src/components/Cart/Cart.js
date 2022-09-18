import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useCartContext } from '../Cart/CartContext';
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap/Button';

const Cart = () => {


    const {cart, cartTotal, vaciarCart, removeItem} = useCartContext();
 
    return (    
        <div className="container bg-light">

{
    cart.length === 0
        ?
        <><h2>Tu Carrito esta vacio</h2>
        <hr/>
        <Link to="/" className="btn btn-primary my-3">Volver a comprar</Link></>

        :
        <>
                <h2>Tu carrito</h2>
                    <hr/> 


                        {cart.map((item) => (

                            <div key={item.id} className="bg-light">

                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                            >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">{item.nombre}</div>
                                            AR$ {item.precio} <br/>
                                            <small className='text-muted'>Unidades: {item.cantidad}</small>
                                        </div>
                                        <button onClick={()=> removeItem(item.id)} className='btn btn-outline-danger rounded-circle' >
                                            X
                                        </button>
                                </ListGroup.Item>
                                <hr/>


                        </div>  ))


                        }
 
                        <h4>Total: ${cartTotal()}</h4>
                        <button className="btn btn-danger my-3 mx-1" onClick={vaciarCart}>Vaciar Carrito</button>
                        <button className="btn btn-outline my-3 mx-1" onClick={vaciarCart}>Ir a pagar</button>
        </>

}
            
        </div>
    )
}
export default Cart;