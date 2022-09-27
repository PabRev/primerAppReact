import {useState} from 'react'
import {db} from '../firebase/config'
import {Link, Navigate} from 'react-router-dom'
import {addDoc, collection} from 'firebase/firestore'
import { useCartContext } from '../Cart/CartContext'






const Checkout = () => {

    const {cart, cartTotal, terminarCompra} = useCartContext()

    const [orderID, setOrderID] = useState(null)

    const [values, setValues] = useState({
            nombre: '',
            dni: '',
            email: ''
    })


    

    const handleInputChange = (e) => {
        setValues({
             ...values,
             [e.target.name] : e.target.value
        })
     }

    const handleSubmit = (e) => {
        e.preventDefault();

        const orden = {
            comprador: values,
            items:cart,
            total:cartTotal()
        }
        
        console.log(orden);

            if(values.email.length < 2) {
                alert('Email incorrecto');
                return;
            }
            if(values.nombre.length < 2) {
                alert('Nombre incorrecto');
                return;
            }
            if(values.dni.length < 8) {
                alert('Dni incorrecto');
                return;
            }

            const ordenesRef = collection(db, 'ordenes')

            addDoc(ordenesRef,orden)
                .then((doc) => {
                    console.log(doc.id);
                    terminarCompra()
                    setOrderID(doc.id)

                })

    }

    if(orderID){
        return (

            <div className='container my-5 bg-light py-3 rounded'>
                <h2>Compra exitosa</h2>
                <hr/>
                <p>Tu numero de orden es <strong>{orderID}</strong>, te recomendamos guardarlo.</p>
                <Link className="btn btn-primary"  to={"/"} >Volver al inicio</Link>
            </div>
        )
    }
    
    if(cart.length === 0) {
        return <Navigate to="/"/>   
    }

    return (
        <div className='container my-5'>
        <h2 className='text-white'>Check Out</h2>
        <hr/>

        <form onSubmit={handleSubmit}>
            <input 
            name='nombre'
            onChange={handleInputChange}
            value={values.nombre} 
            type={'text'} 
            className="my-3 form-control" 
            placeholder="Ingresa tu nombre" />

            <input 
            name="dni"
            onChange={handleInputChange}
            value={values.dni} 
            type={'text'} 
            className="my-3 form-control" 
            placeholder="Ingresa tu numero de documento" />

            <input 
            name="email" 
            onChange={handleInputChange}
            value={values.email} 
            type={'email'} 
            className="my-3 form-control" 
            placeholder="Ingresa tu correo electronico" />
            
            <button type='submit' className="btn btn-primary">Enviar</button>
        </form>

        </div>
    )

}

export default Checkout