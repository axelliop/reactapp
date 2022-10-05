import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Colores from './Colores'
import { products } from './data/products'

const ItemDetailContainer = () => { /* detalles de los productos
 */

const {id: itemId} = useParams()
const [item, setItem] = useState({})

useEffect(() => {
    getItemDetails().then(response => {
setItem(response)
console.log(response)

    }) /* resuelvo con la respuesta */
}, [])



const getItemDetails = () => { /* promesas */
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products.find( p => p.id == (itemId))) /* el number es parecido al parseInt */
         /* resolver la promesa , lanzamos una busqueda para todos los productos y solo traemos los que nos interesa, donde el producto sea igual al id del item id*/
    }, 1000)
})
}

  return (
    <div className='m-8'>
        <div>{item.title}</div>
        <div>Price:{item.price}</div>
        <Colores></Colores>
        </div>


  )
}

export default ItemDetailContainer