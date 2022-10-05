import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './data/products'
import ItemCardShop from './ItemCardShop'



/* getproducts me regresa la promesa, cuando getproducts se resuelve capturamos la respuesta(response), que me devuelve products */


const ItemListContainer = () => {

    const [items, setItems] = useState([]) /* para llevar products al dom tengo que usar un hook de estado */   
    const [loading, setLoading] = useState(true);
    const {categoriaId} = useParams(); /*  useparams para filtrar por categoria */

useEffect(() => { /* se va a ejecutar solo en el montaje */
getProducts()
.then((response) => {
        if(categoriaId){
            setItems(
                 response.filter((item) => item.category === categoriaId )
            );
        } else {
            setItems(response);
        }
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false)) /* resuelvo el asyncronismo aca con el then */
}, [categoriaId])

const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products) /* resuelvo la promesa y mando products aca cuando la resuelvo */
        }, 2000);
    })/* async mock */
}


/* mapeo items y spreed operator para llamar todo, siempre key para llamar con cada cosa */
  return (
    <>
        <div>Tienda 2</div>

        {loading ? (
        <p>Cargando...</p>
      ) : (
     items.map(i => <ItemCardShop key={i.id} {...i}/>)
      )}

         
    </>
  )
}

export default ItemListContainer