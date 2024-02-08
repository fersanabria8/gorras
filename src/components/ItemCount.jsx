import { initializeApp } from 'firebase/app';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const ItemCount = ({initial, onAdd}) => {

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
    <div>
      <button disabled={condicionBoton} onClick={resta}>-</button>
      <p>{contador}</p>
      <button disabled={condicionBoton} onClick={suma}>+</button>
      <button disabled={condicionBoton} onClick={handleClick}>Agregar al carrito</button>
      {
        condicionBoton && <>
          <NavLink to="/productos">
            <button type='button'>Seguir Comprando</button>
          </NavLink>
          <NavLink to={"/carrito"}>
            <button type='button'>Finalizar Compra</button>
          </NavLink>
      </>
      }
      {!condicionBoton && <p>Agregue productos al carrito</p>}
    </div>
  )
}

export default ItemCount