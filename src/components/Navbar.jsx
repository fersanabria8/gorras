import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {

  const navItems = [
    {link: 'Inicio', path: '/'},
    {link: 'Productos', path: '/productos'},
    {link: 'Carrito', path: '/carrito'},
  ]

  return (
    <div className='navbar__container'>
      <NavLink to={'/'}> 
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
      </NavLink>

      <ul className='navbar__list'>
        {
          navItems.map(({link, path}) => (
            <NavLink to={path} key={link}>{link}</NavLink>
          ))
        }
      </ul>
    </div>
  )
}

export default Navbar