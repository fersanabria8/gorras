import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext';
import '../styles/ItemDetail.css'
const ItemDetail = ({ producto }) => {
const [contador, setContador] = useState(0);

const { cartList, agregarProducto } = useContext(CartContext)

  const onAdd = (cant) => {
    setContador(cant)
    agregarProducto({...producto, cantidad: cant})
  }



  return (
    <>
      <div className='detail__card__container'>
        <h3>{producto.nombre}</h3>
        <img src={producto.imagenURL} alt="" />
        <p>$ {producto.precio}</p>
        <p>Stock: {producto.stock} unidades</p>
  
      </div>
      <ItemCount initial={1} onAdd={onAdd} descripcion={producto.descripcion}/>
    </>
  )
}

export default ItemDetail