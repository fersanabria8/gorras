
import { useContext } from 'react'
import '../styles/Cart.css'
import { CartContext } from '../context/CartContext'
import { NavLink } from 'react-router-dom'

const Cart = () => {

  const { cartList, vaciarCarrito, precioTotal  } = useContext(CartContext)

  return (
    <div className='cart__container'>
        { cartList.map(item => 
        <div className='cart__item' key={item.id}>
          <h3>{item.nombre} x {item.cantidad}</h3>
          <div className='cart__img'>
            <img src={item.imagenURL} alt="fotos" />
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio: ${item.precio}</p>
          </div>
        </div>)}
        <br />
      { cartList.length > 0 ? 
        <>
        <button type='button' onClick={vaciarCarrito} className='cart__button'>Vaciar Carrito</button>
          <div className='cart__total'>
            <h3>{`Total:$ ${precioTotal()}`}</h3>
          </div>  
            <NavLink to='/checkout'>Finalizar Compra</NavLink>
        </>
        :
        <h3>No hay elementos en el carrito</h3>
      }
    </div>
  )
}

export default Cart