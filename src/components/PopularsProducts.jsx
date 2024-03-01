import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import { db } from '../firebase/config';
import { NavLink } from 'react-router-dom';
import '../styles/PopularsProducts.css'

const PopularsProducts = ({ productos }) => {
  // const [gorrasP, setGorrasP] = useState([]) //viejo que si utilizo

  const [gorrasP, setGorrasP] = useState(productos) // prueba nueva
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productosRefp = collection(db, 'gorrasPopulares')
  const querys = query(productosRefp, orderBy('nombre', 'desc'));

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await getDocs(querys);
        const productos = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));

        if (productos.length === 0) {
          setError('No hay productos populares.');
        } else {
          setGorrasP(productos);
        }
      } catch (error) {
        setError('Error al cargar productos.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // [] significa que solo se ejecutará al montar el componente

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>

    <div className='container__popularproduct animate__animated animate__bounce'>
      <div className='title'>
        <h2><span>Populars</span> Products</h2>
        
      </div>
      {gorrasP.map((gor) => (
        <NavLink to='/productos' key={gor.id}>
          <div className='card__popularproduct'>
            <img src={gor.imagenURL} alt="fotos" />
            {/* {`/productos/${gor.id}`} */} 
            <h3>{gor.nombre}</h3>
          </div>
        </NavLink>
      ))}
    </div>
    </>
    // <div>
    //   <h2><span>Populars</span> Products</h2>
      
    // </div>
  )
}

export default PopularsProducts

