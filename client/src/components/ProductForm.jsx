import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createProduct } from '../features/products/productSlice'
import Combo from './Combo';

function ProductForm() {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createProduct({ name , type , quantity, price}))
    setName('')
    setType('')
    setQuantity('')
    setPrice('')
  }

  return (
    <section className='form'>
      <Combo></Combo>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Produit</label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='type'>Type</label>
          <input
            type='text'
            name='type'
            id='type'
            value={type}
            onChange={(e) => {setType(e.target.value)}
            }
          />
        </div>
        <div className='form-group'>
          <label htmlFor='quantity'>Durée(s)</label>
          <input
            type='number'
            name='quantity'
            id='quantity'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Prix unitaire</label>
          <input
            type='number'
            name='price'
            id='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Ajouter
          </button>
        </div>
      </form>
    </section>
  )
}

export default ProductForm