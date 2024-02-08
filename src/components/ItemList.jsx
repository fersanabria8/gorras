import React from 'react'
import Item from './Item'

const ItemList = ({product}) => {
  return (
    <div className='itemlist__container'>
      {
        product.map(prod => 
          <Item 
            key={prod.id}
            itemGorra={prod}
          />)
      }
    </div>
  )
}

export default ItemList