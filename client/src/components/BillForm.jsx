import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createBill } from '../features/bills/billSlice'
import { getProducts } from '../features/products/productSlice'
// import Combo from './Combo';
import ComboBox from "react-responsive-combo-box";
import "react-responsive-combo-box/dist/index.css";

function BillForm() {
  const [payment, setpayment] = useState('')
  const [product, setproduct] = useState('')
  // const [text, setText] = useState('')
  const paymentOpt = ['virement','espèces','chèque','dépôt']
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    let date = new Date().toLocaleString('en-US')
    let Myobj = { payment, product , date }
    console.log(Myobj)
    dispatch(createBill({ payment, product , date }))
    setpayment('')
    setproduct('')
  }

  dispatch(getProducts)
  const { products } = useSelector(
    (state) => {
      return state.products
    }
  )
  const data = products.map((product)=>product.name)
  
  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='product'>Produit </label>
          {/* <Combo></Combo> */}
          <ComboBox options={data} key='product' onSelect={(option) => setproduct(option)} />
          {/* <Combo></Combo> */}
            {/* <ComboBox options={data} enableAutocomplete /> */}
          
          {/* <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          /> */}
          <label htmlFor='payment'>Mode payement </label>
          <ComboBox options={paymentOpt} key='payment' onSelect={(option) => setpayment(option)}/>
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