import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import {pedirProductos } from '../../helpers/pedirProductos'
import ItemList from '../ItemList/ItemList.js'

function ItemListContainer() {

const [productos, setProductos] = useState([]);

const {categoryId} = useParams();
console.log(categoryId)

useEffect(()=>{
  pedirProductos()
  .then( (res) => {
    if(!categoryId) setProductos(res);
    else setProductos(res.filter((prod) => prod.category === categoryId))
    
  })
  .catch((error)=> {
    console.log(error);
  })
},[categoryId])

  return (
   <div  className="container">
    <ItemList  productos={productos}/>
    </div>
  );
}

export default ItemListContainer;