import React from 'react'
import '../styles/Item.css'
import { NavLink } from 'react-router-dom'

const Item = ({itemGorra}) => {

  return (
    <div className="card__container">
      <div className="card_wrapper">

        <h3>{itemGorra.nombre}</h3>
        <div className='card__img'>
          <img src={itemGorra.imagenURL} alt="" />
          <NavLink to={`/detalle/${itemGorra.id}`}>
            <button type='button' className="card__button">Añadir al carrito</button>
          </NavLink>
          <p>$ {itemGorra.precio}</p>
          <p>Stock: {itemGorra.stock} unidades</p>
          {/* <p>{itemGorra.popular}</p> */}
        </div>
      </div>
    </div>

  )
}

export default Item