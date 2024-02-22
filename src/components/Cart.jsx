import { useContext } from 'react'
import '../styles/Cart.css'
import { CartContext } from '../context/CartContext'
import { NavLink } from 'react-router-dom'


const Cart = ({ suma, resta, contador, setContador }) => {
  const { cartList, vaciarCarrito, precioTotal,  } = useContext(CartContext)




  return (
    <>
      <div className='cart__container'>
        {cartList.map(item =>
          <div className='cart__item' key={item.id}>
            <h3>{item.nombre}</h3>
            {/* <h3>{item.nombre}</h3>  */}
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio: ${item.precio}u</p>
            <p>Precio Total: $ {item.precio}u x {item.cantidad} = ${item.precio * item.cantidad}</p>
            <div className='cart__img'>
              <img src={item.imagenURL} alt="fotos" />
            </div>
          </div>)}
      </div>
      <div>
        {cartList.length > 0 ?
          <div className='cart__total'>
            <button type='button' onClick={vaciarCarrito} className='cart__button'>Vaciar Carrito</button>
            <div className='cart__total'>
              <h3>{`Total:$ ${precioTotal()}`}</h3>
            </div>
            <NavLink to='/checkout'><span>Finalizar Compra</span></NavLink>
          </div>
          :
          <h3>No hay elementos en el carrito</h3>
        }
      </div>

    </>
  )
}

export default Cart