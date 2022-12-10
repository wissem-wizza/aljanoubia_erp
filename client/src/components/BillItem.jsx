import { useSelector, useDispatch } from 'react-redux'
import { deleteBill , updateBill } from '../features/bills/billSlice'
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import DeleteIcon from '@mui/icons-material/Delete';
import { getProducts } from '../features/products/productSlice';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

function BillItem({ bill }) {
  const dispatch = useDispatch()
  dispatch(getProducts)
  const { products } = useSelector(
    (state) => state.products
  )

  const factured = products.filter(product => product.name === bill.product)

  // dispatch(getUser)
  return (
    <div className='bill'>
      <div>{new Date(bill.createdAt).toLocaleString('en-US')}</div>
      <hr />
      <div >
        <h2>{"facture N° "+bill._id}</h2>
        <hr />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><b>Produit</b></TableCell>
                <TableCell align="right"><b>Catégorie</b></TableCell>
                <TableCell align="right"><b>Prix</b></TableCell>
                <TableCell align="right"><b>Durée(s)</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {factured.map((product) => (
                  <TableRow
                    key={product._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    product={product}
                    className='table-group'
                  >
                    <TableCell component="th" scope="product"><h2>{product.name}</h2></TableCell>
                    <TableCell align="right"><h2>{product.type}</h2></TableCell>
                    <TableCell align="right"><h2>{product.price}</h2></TableCell>
                    <TableCell align="right"><h2>{product.quantity}</h2></TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        {/* <h2>{bill.user}</h2> */}
      </div>
      <div className='Bill-Line'>
        <h4>{bill.payment}</h4>
      </div>
      <hr />
      <button onClick={() => dispatch(deleteBill(bill._id))}>
      <DeleteIcon></DeleteIcon>
      </button>
      {/* <button onClick={() => dispatch(updateBill(bill._id))}><EditIcon></EditIcon></button> */}
      <button><PrintIcon></PrintIcon></button>
    </div>
  )
}

export default BillItem