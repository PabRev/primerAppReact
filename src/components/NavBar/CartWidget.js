import { Link } from 'react-router-dom';
import "./CartWidget.scss"
import { useCartContext } from './../Cart/CartContext';

function CartWidget() {

  const { cartQ , cart} = useCartContext()
    return(
      

       <Link className={`widget ${cart.length>0 ? "widget-visible" : ''}`} to="/cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"/><circle cx="10.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/></svg>
        <span className="text-muted mx-2">{cartQ()}</span>
       </Link>
    )



}
export default CartWidget;