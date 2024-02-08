import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ producto }) => {
const [contador, setContador] = useState(0);

const { cartList, agregarProducto } = useContext(CartContext)

  const onAdd = (cant) => {
    setContador(cant)
    agregarProducto({...producto, cantidad: cant})
  }



  return (
    <>
      <div className='detailcard__container'>
        <h3>{producto.nombre}</h3>
        <img src={producto.imagenURL} alt="" />
        <p>$ {producto.precio}</p>
        <p>Stock: {producto.stock} unidades</p>
      </div>
      <ItemCount initial={1} onAdd={onAdd}/>
    </>
  )
}

export default ItemDetail