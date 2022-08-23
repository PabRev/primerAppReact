import "./App.css"
import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import ItemListContainer from "./components/Carrito/ItemListContainer";
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <div><NavBar/></div>
      <Row className="mx-3">
        <Cards bebida1='Vodka Smirnoff Limon' bebida2='Vodka Absolut Clasico'/>
        <ItemListContainer/>
      </Row>
      
      
    </div>
  );
}

export default App;
