import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/config'
import ItemDetail from './ItemDetail'
import '../styles/ItemDetailContainer.css'

const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true)
  const [gorraDetail, setGorraDetail] = useState({})
  const id = useParams().id;

  console.log(id)


  useEffect(() => {
    const docRef = doc(db, 'gorras', id);
    getDoc(docRef)
      .then(resp => {
        console.log('Llammo API firebase desde ItemDetailContainer')
        setGorraDetail({...resp.data(), id:resp.id})
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  },[id])

  return (
    <div className='detail__container'>
      {
        loading ? <h1>Cargando...</h1> : gorraDetail && <ItemDetail producto={gorraDetail} />
      }
    </div>
  )
}

export default ItemDetailContainer