import { useDispatch } from 'react-redux'
import { deleteBill , updateBill } from '../features/bills/billSlice'
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import DeleteIcon from '@mui/icons-material/Delete';

function BillItem({ bill }) {
  const dispatch = useDispatch()

  return (
    <div className='bill'>
      <div>{new Date(bill.createdAt).toLocaleString('en-US')}</div>
      <h2>{bill.text}</h2>
      <button onClick={() => dispatch(deleteBill(bill._id))}>
      <DeleteIcon></DeleteIcon>
      </button>
      {/* <button onClick={() => dispatch(updateBill(bill._id))}><EditIcon></EditIcon></button> */}
      <button><PrintIcon></PrintIcon></button>
    </div>
  )
}

export default BillItem