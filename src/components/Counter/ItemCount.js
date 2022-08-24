import { useState } from "react"
import Button from 'react-bootstrap/Button'

const Counter = () => {


        let [counter, setCounter] = useState(0)

    const sumar = () => {
        if(counter<10){setCounter(counter+1)}
        
    }

    const restar= ()=>{
        if(counter>0){setCounter(counter - 1)}
        
    }
    return(
        <div className="container col-4 bg-light my-4 p-3 rounded border">
            
            <h4>Contador</h4>
            <hr/>
            <div className="bg-white rounded border p-2">
                <button size='sm' onClick={restar} className="btn outline-secondary">-</button>
                <span className="mx-2">{counter}</span>
                <button size="sm" onClick={sumar} className="btn outline-secondary">+</button>
                <button size="sm" className="btn outline-success ms-2">Agregar al carrito</button>
            </div>
        </div>
    )
}
export default Counter