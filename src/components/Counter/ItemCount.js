import Button from 'react-bootstrap/Button'

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
                <Button size='sm' variant="outline-secondary mx-1">Agregar</Button>
            </div>
        
    )
}
export default Counter