import {createContext, useState} from "react"
import {useContext} from "react";
import {useEffect} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart,item])
  }

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }
  const isInCart = (id) => {
    return cart.some((item)=>item.id === id)
  }
 
  const cartQ = () => {
     return cart.reduce((acc, item) => acc + item.cantidad, 0);
  }

  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + (item.cantidad * item.precio), 0)
  }
  const vaciarCart = () => {
    setCart([])
  }
  const terminarCompra = () => {
    setCart([])
  }

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(cart))
  },[cart]);

    return (
        
<CartContext.Provider value={{
      cart,
      addToCart,
      isInCart,
      cartQ,
      cartTotal,
      removeItem,
      vaciarCart,
      terminarCompra
    }}>
        {children}
    </CartContext.Provider>
            
        
        )
}

export const useCartContext = () => {
  return useContext(CartContext);
}