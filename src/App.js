import "./App.css"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {CartProvider} from "./components/Cart/CartContext"
import Cart from "./components/Cart/Cart"



function App() {

  

  return (
    <CartProvider>

    <BrowserRouter>
          <div>
            <div><NavBar/></div>
            <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/productos/:categoryId/" element={<ItemListContainer/>} />
            <Route path="*" element={<Navigate to="/"/>} />
            <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
          
             </Routes>
          </div>
      </BrowserRouter>
      </CartProvider>
      
  );
}

export default App;
