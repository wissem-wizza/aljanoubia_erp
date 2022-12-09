import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, reset } from '../features/products/productSlice'
import { createBill } from '../features/bills/billSlice'
import Combo from './Combo';
// import ComboBox from "react-responsive-combo-box";
// import "react-responsive-combo-box/dist/index.css";

function BillForm() {
  const [text, setText] = useState('')
  // const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createBill({ text }))
    setText('')
  }

  const { products } = useSelector(
    (state) => state.products.products
  )
  // dispatch(getProducts)
  console.log(products)
  
  // let data = products.map((product) => product.name)
  
  return (
    <section className='form'>
      <Combo></Combo>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Produit </label>
          {/* <Combo></Combo> */}
            {/* <ComboBox options={data} enableAutocomplete /> */}
          
          {/* <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          /> */}
          <label htmlFor='text'>Mode payement </label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Ajouter Facture
          </button>
        </div>
      </form>
    </section>
  )
}

export default BillForm