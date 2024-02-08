import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cartList, setCartList] = useState([])

  const agregarProducto = (item) => {

    setCartList([...cartList, item])
  }
  
  const precioTotal = () => {
    return cartList.reduce((acumulado, valor)=>(acumulado + (valor.cantidad * valor.precio)), 0) 
  }

  const vaciarCarrito = () => {
    setCartList([])
  }


  return (
    <CartContext.Provider value={{
      cartList,
      agregarProducto,
      precioTotal,
      vaciarCarrito
    }}>
      {children}
    </CartContext.Provider>
  )
}