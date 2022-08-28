import {stock} from '../data/data.js';


export const pedirProductos = () => {

    return new Promise((resolve, reject) => { 
   setTimeout(() => {
  resolve(stock)
  }, 2000)}
  )}
  
  