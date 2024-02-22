import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

const Navbar = () => {

  const { cantidadItems } =useContext(CartContext)
  const [menuOpen, setMenuOpen] = useState(false)

  console.log( cantidadItems())
  const navItems = [
    {link: 'Inicio', path: '/'},
    {link: 'Productos', path: '/productos'},
    {link: 'Carrito', path: '/carrito', cantidad: cantidadItems()}
  ]


  return (
    <div className='navbar__container'>
      <NavLink to={'/'}> 
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
      </NavLink>

      <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

    
      <ul className={menuOpen ? 'open' : ''} onClick={() => setMenuOpen(false)}>
    
          <li className='navbar__list'>
        {
          navItems.map(({link, path, cantidad}) => (
            <NavLink to={path} key={link}>{link} <span>{cantidad}</span></NavLink>
          ))
        }
        {
        //  < NavLink>Carrito 
        //  <span className="cart-length"> { cantidadItems() !== 0 && cantidadItems() }
        //  </span>
        //  </NavLink>
        }
        </li>
      </ul>
    </div>
  )
}

export default Navbar