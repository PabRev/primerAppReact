
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {db} from ".././firebase/config"
import ItemDetail from '../ItemDetailContainer/ItemDetail.js'
import {doc, getDoc} from "firebase/firestore"


 const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const {itemId} = useParams()

    console.log(itemId)
    console.log(item)
    useEffect(() => {

        const docRef = doc( db, 'productos', itemId )
        getDoc(docRef)
            .then((doc) => setItem({id:doc.id, ...doc.data()}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemId])



    return(
        <div className="container">
        <h3 className='text-white my-3'>Detalle de producto</h3>
       <ItemDetail item={item}/>
 
        </div>
    )
 }

 export default ItemDetailContainer