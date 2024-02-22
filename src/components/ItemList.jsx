import React, { useState } from 'react'
import Item from './Item'
import '../styles/ItemList.css'
import Buttons from './Buttons'



const ItemList = ({productos, categoria}) => {

  const [menuItem, setMenuItem] = useState(productos)
  const categoriaGorras = [...new Set(productos.map((val) => val.categoria))]
  const popularGorras = [...new Set(productos.map((vals) => vals.popular))]

  // FILTRO DE CATEGORIAS
  const filterItems = (cat) => {
    const newItemList = productos.filter((item) => item.categoria === cat)
    setMenuItem(newItemList)
  }

  // FILTRO DE POPULARES
  const filterPopular = (pop) => {
    const newItemPop = productos.filter((itempop) => itempop.popular === pop)
    setMenuItem(newItemPop)
  }

  return (
    <>
    <Buttons className='buttons'
      categoriaGorras={categoriaGorras}
      popularGorras={popularGorras}
      setMenuItem={setMenuItem}
      filterItems={filterItems}
      filterPopular={filterPopular}
      productos={productos}
    />
    <div className='itemlist__container'>
      {
        menuItem.map(prod => 
          <Item 
            key={prod.id}
            itemGorra={prod}
          />)
      }
    </div>
    </>
  )
}

export default ItemList