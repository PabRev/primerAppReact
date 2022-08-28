import React, { useEffect, useState } from 'react'

import {pedirProductos } from '../../helpers/pedirProductos'
import ItemList from '../ItemList/ItemList.js'

function DefaultExample() {

const [productos, setProductos] = useState([]);
console.log(productos)


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
   <div>
    <ItemList productos={productos}/>
    </div>
  );
}

export default DefaultExample;