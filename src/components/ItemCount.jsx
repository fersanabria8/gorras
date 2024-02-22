// import { initializeApp } from 'firebase/app';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/ItemCount.css'

const ItemCount = ({initial, onAdd, descripcion}) => {

  const [contador, setContador] = useState(1);
  const [condicionBoton, setCondicionBoton] = useState(false);

  const suma = () => {
    setContador(contador + 1)
  }

  const resta = () => {
   if (contador > initial)
   setContador(contador - 1)
  }

  const handleClick = () => {
    onAdd(contador)
    setContador(initial)
    setCondicionBoton(true)

  }


  return (
    <div className='count__container'>
      <div className="detail__text">
        <h3>Gorra</h3>
        <p>{descripcion}</p>
      </div>
      <div className='count__button'>
        <button disabled={condicionBoton} onClick={resta}>-</button>
        <p>{contador}</p>
        <button disabled={condicionBoton} onClick={suma}>+</button>
      </div>
        <button className='count__button_add' disabled={condicionBoton} onClick={handleClick}>Agregar al carrito</button>
      {
        condicionBoton && 
        <div className='count__nextbutton'>
          <NavLink to="/productos">
            <button className='count__button_add' type='button'>Seguir Comprando</button>
          </NavLink>
          <NavLink to={"/carrito"}>
            <button className='count__button_add' type='button'>Finalizar Compra</button>
          </NavLink>
      </div>
      }
      {!condicionBoton && <p>¡Agregue productos al carrito!</p>}
    </div>
    
  )
}

export default ItemCount