import { useDispatch } from 'react-redux'
import { deleteBill } from '../features/bills/billSlice'

function BillItem({ bill }) {
  const dispatch = useDispatch()

  return (
    <div className='bill'>
      <div>{new Date(bill.createdAt).toLocaleString('en-US')}</div>
      <h2>{bill.text}</h2>
      <button onClick={() => dispatch(deleteBill(bill._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default BillItem