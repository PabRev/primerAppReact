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

            <div className="rounded border p-2">
                <button size='sm' onClick={restar} className="btn outline-secondary">-</button>
                <span className="mx-2">{counter}</span>
                <button size="sm" onClick={sumar}  className="btn outline-secondary">+</button>
                <Button size='sm' variant="outline-secondary mx-1">Agregar</Button>
            </div>
        
    )
}
export default Counter