import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cartList, setCartList] = useState([])

  const agregarProducto = (item) => {

  //   const existingItem = cartList.find(i => i.id === item.id);

  // if (existingItem) {
  //   existingItem.cantidad += item.cantidad;
  //   setCartList([...cartList]); // Actualización eficiente gracias a igualdad superficial
  // } else {
  //   setCartList([...cartList, { ...item, cantidad: item.cantidad }]);
  // }
  try {
    if (!item) {
      throw new Error('El producto no puede ser vacío.');
    }

    if (!item.id) {
      throw new Error('El producto debe tener un ID.');
    }

    if (!item.cantidad) {
      throw new Error('El producto debe tener una cantidad.');
    }

    const index = cartList.findIndex(i => i.id === item.id);

    if (index > -1) {
      const oldQy = cartList[index].cantidad;

      cartList.splice(index, 1);
      setCartList([...cartList, { ...item, cantidad: item.cantidad + oldQy }]);
    } else {
      setCartList([...cartList, { ...item, cantidad: item.cantidad }]);
    }
  } catch (error) {
    console.error(error.message);
    switch (error.message) {
      case 'El producto no puede ser vacío.':
        alert('Por favor, selecciona un producto.');
        break;
      case 'El producto debe tener un ID.':
        alert('El producto seleccionado no tiene un ID válido.');
        break;
      case 'El producto debe tener una cantidad.':
        alert('Por favor, ingresa una cantidad válida para el producto.');
        break;
      default:
        console.error(error.message);
        alert('Ha ocurrido un error inesperado. Inténtalo nuevamente más tarde.');
    }
  }

    // const index = cartList.findIndex(i => i.id === item.id)

    // if (index > -1) {
    //   const oldQy = cartList[index].cantidad

    //   cartList.splice(index, 1)
    //   setCartList([...cartList, {...item, cantidad: item.cantidad + oldQy}])
    // } else {
    //   setCartList([...cartList, {item, cantidad: item.cantidad}])
    // }

    // setCartList([...cartList, item])

};
  
const precioTotal = () => {
  return cartList.reduce((acumulado, valor) => {
    return acumulado + valor.cantidad * valor.precio;
  }, 0);
};
  const vaciarCarrito = () => {
    setCartList([])
  }

  const cantidadItems = () => {
    return cartList.reduce((acumulado, valor) => {
      return acumulado + valor.cantidad
    }, 0)
  }

  return (
    <CartContext.Provider value={{
      cartList,
      agregarProducto,
      precioTotal,
      vaciarCarrito,
      cantidadItems
    }}>
      {children}
    </CartContext.Provider>
  )
}