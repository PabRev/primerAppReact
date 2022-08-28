import "./App.css"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Carrito/ItemListContainer";
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./components/Counter/ItemCount";


function App() {
  return (
    <div>
      <div><NavBar/></div>
      <Row className="mx-3">
        
        <ItemListContainer/>
      </Row>
      <ItemCount/>
      
    </div>
  );
}

export default App;
