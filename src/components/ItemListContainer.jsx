import React, { useEffect, useState } from 'react'
import '../styles/ItemListContainer.css'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { db } from '../firebase/config';
import { collection, getDocs, where, query } from 'firebase/firestore';

const ItemListContainer = () => {
  const [gorra, setGorra] = useState([]) //array vacio.
  const [loading, setLoading] = useState(true)
  const categoria = useParams().categoria;

  useEffect(() => {
    const productosRef = collection(db, 'gorras');
    const q = categoria ? query(productosRef, where('categoria', '==', categoria)) : productosRef;
    getDocs(q)
      .then((resp) => {
        setGorra(
          resp.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
          }))
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  },[categoria])


 
  return (
    <>
      {categoria && <h2 className='categoria'>Categoria: {categoria}</h2>}
      { loading ? <h1>Cargando...</h1> : <ItemList product={gorra} /> }
    </>

  )
}

export default ItemListContainer