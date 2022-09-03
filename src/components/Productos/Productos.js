import React, { useEffect, useState } from 'react'
import useParams from "react-router-dom";
import {pedirProductos } from '../../helpers/pedirProductos'
import ItemList from '../ItemList/ItemList.js'

function DefaultExample() {

const [productos, setProductos] = useState([]);
console.log(productos)

const {categoryId} = useParams()

useEffect(()=>{
  pedirProductos()
  .then( (res) => {
    
    setProductos(res);
    
  })
  .catch((error)=> {
    console.log(error);
  })
},[])

  return (
   <div  className="container">
    <ItemList  productos={productos}/>
    </div>
  );
}

export default DefaultExample;