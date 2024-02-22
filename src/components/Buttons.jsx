import React from 'react'
import '../styles/Buttons.css'

const Buttons = ({categoriaGorras, popularGorras ,setMenuItem, filterItems, filterPopular, productos}) => {

  return (
    <div className='buttons__container'>
      { popularGorras.map((itempopular, index) => (
        <button
          key={index}
          onClick={() => filterPopular(itempopular)}
        >
          {itempopular}
        </button> 
      ))}
      
      {categoriaGorras.map((item, index) => (
        <button
          key={index}
          onClick={() => filterItems(item)}
        >
        {item}
        </button>
      ))} 
      <button onClick={() => setMenuItem(productos)}>
        Todos
      </button>
    </div>
  )
}

export default Buttons