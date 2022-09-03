
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {pedirProductos} from '../../helpers/pedirProductos'
import ItemDetail from '../ItemDetailContainer/ItemDetail.js'


 const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const {itemId} = useParams(null)

    console.log(itemId)
    console.log(item)
    useEffect(() => {

        pedirProductos()

        .then( (res) => {
            setItem(res.find((prod) => prod.id === itemId))
        })

        .catch(err => console.log(err) )

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return(
        <div className="container">
        <p>Ver el item</p>
       <ItemDetail item={item}/>
 
        </div>
    )
 }

 export default ItemDetailContainer