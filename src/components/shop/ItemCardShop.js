import React from 'react'
import { Link } from 'react-router-dom'
import { products } from './data/products'


const ItemCardShop = ({id, title, price}) => {
  return (
    <div className='flexContainer'>
    <Link to={'/item/' + id}>

    <div className="flexCaja">
      <div><img src={products[0].img}/></div>
        <div>{id}</div>
        <div>{title}</div>
        <div>{price}</div>
    </div>
    </Link>
    </div>

  )
}


export default ItemCardShop