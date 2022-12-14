
import ListGroup from 'react-bootstrap/ListGroup';
import { useCartContext } from '../Cart/CartContext';
import {Link} from 'react-router-dom'



const Cart = () => {


    const {cart, cartTotal, vaciarCart, removeItem} = useCartContext();
 
    return (    
        <div className="container bg-light rounded shadow border my-3">

        {
        cart.length === 0
        ?

       
        
        <div><h2 className='my-4'>Tu Carrito esta vacio</h2>
        <hr/>
        <Link to="/" className="btn btn-primary my-3">Volver a comprar</Link></div>

        :
        <div>
                <h2 className='my-3'>Tu carrito</h2>

                    <hr/> 


                        {cart.map((item) => (

                            <div key={item.id} className="bg-light rounded border my-2 shadow">

                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                            >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">{item.nombre}</div>
                                            AR$ {item.precio} <br/>
                                            <small className='text-muted'>Unidades: {item.cantidad}</small>
                                        

                                        </div>
                                        <button onClick={()=> removeItem(item.id)} className='btn btn-outline-danger rounded-pill my-auto me-4' >
                                            Eliminar
                                        </button>
                                </ListGroup.Item>
                                <hr/>


                        </div>  ))


                        }

                        
                        <h3 className='my-2 text-center'>Total: ${cartTotal()}</h3>
                        <button className="btn btn-outline-danger rounded-pill my-3 mx-1 shadow" onClick={vaciarCart}>Vaciar Carrito</button>
                        <Link className='btn btn-outline-success rounded-pill shadow' to='/checkout'>Terminar mi compra</Link>
                        

        </div>}


            
        </div>
        
        
    )
}
export default Cart;