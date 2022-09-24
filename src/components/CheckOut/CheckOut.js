import {useState, useContext} from 'react'



const Checkout = () => {


    const [values, setValues] = useState({
        nombre: '',
            dni: '',
            email: ''
    })

    const [cart, cartContext] = useContext()

    const handleSubmit = (e) => {
        e.preventDefault();
        const orden = {
            comprador: values,
            items:cart,
            total:cartContext
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
            }}
    
    const handleInputChange = (e) => {
       setValues({
            ...values,
            [e.target.name] : e.target.value
       })
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