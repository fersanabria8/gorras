import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Esta es la página de inicio</p>
      <NavLink to='/productos'>
        <button type='button'>Ir a la página de productos</button>
      </NavLink>
    </div>
  )
}

export default Home