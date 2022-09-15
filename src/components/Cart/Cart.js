import { useCartContext } from './CartContext';

const Cart = () => {


    const {cart, cartTotal, vaciarCart, removeItem} = useCartContext();
 
    return (    
        <div className="container bg-light">
            <h2>Tu carrito</h2>
            <hr/>


                {cart.map((item) => (

                    <div key={item.id} className="bg-light">

                        <h3>Producto: {item.name}</h3>
                        <p>Precio: {item.price}</p>
                        <p>Unidades: {item.quantity}</p>
                        <hr/>
                        <button onClick={()=> removeItem(item.id)} className="btn btn-danger">Borrar
                        </button>

                    </div>  ))
                }

                <h4>Total: ${cartTotal()}</h4>
                <button className="btn btn-danger" onClick={vaciarCart}>Vaciar Carrito</button>
        </div>
    )
}
export default Cart;