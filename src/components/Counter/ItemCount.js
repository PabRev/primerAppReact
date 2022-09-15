import { Link } from "react-router-dom"

const Counter = ({max, counter, setCounter, handleAgregar }) => {


        

    const handleSumar = () => {
       if(counter<max){setCounter(counter+1)}
        
    }

    const handleRestar= ()=>{
        if(counter>0){setCounter(counter - 1)}
        
    }
    


    return(

            <div className="rounded border p-2">
                <button size='sm' onClick={handleRestar} className="btn outline-secondary">-</button>
                <span className="mx-2">{counter}</span>
                <button size="sm" onClick={handleSumar}  className="btn outline-secondary">+</button>
                <Link className="btn btn-primary" onClick={handleAgregar}>Agregar</Link>
            </div>
        
    )
}
export default Counter