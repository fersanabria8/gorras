import React from 'react'
import { NavLink } from 'react-router-dom'
import PopularsProducts from './PopularsProducts'
import '../styles/Home.css'

const Home = () => {
  return (
    <>
      <div className='home__container'>
        <h1>Home</h1>
        <p>Esta es la página de inicio</p>
        <NavLink to='/productos'>
          <button type='button'>Ir a la página de productos</button>
        </NavLink>
      </div>
      <PopularsProducts />
    </>
  )
}

export default Home