import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import ItemList from '../ItemList/ItemList.js'
import {collection, getDocs, query, where} from 'firebase/firestore';
import { db} from ".././firebase/config";
function ItemListContainer() {

const [productos, setProductos] = useState([]);

const {categoryId} = useParams();
console.log(categoryId)

useEffect(()=>{
  
    const productosRef = collection(db, 'productos');
    
    const q = categoryId 
              ? query(productosRef, where('category', '==', categoryId))
              : productosRef;

    getDocs(productosRef)
    .then((snapshot)=>{
      const productosDB = snapshot.docs.map( (doc)=>({id:doc.id, ...doc.data()}) )
      console.log(productosDB);
      setProductos(productosDB);


    });

},[categoryId])

  return (
   <div  className="container">
    <ItemList  productos={productos}/>
    </div>
  );
}

export default ItemListContainer;