import {createContext, useState} from "react"


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
     return cart.reduce((acc, item) => acc + item.quantity, 0)
  }

  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0)
  }
  const vaciarCart = () => {
    setCart([])
  }

    return (
        
<CartContext.Provider value={{
      cart,
      addToCart,
      isInCart,
      cartQ,
      cartTotal,
      removeItem,
      vaciarCart
    }}>
        {children}
    </CartContext.Provider>
            
        
        )
}