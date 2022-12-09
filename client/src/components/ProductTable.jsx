import { useSelector, useDispatch } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { getProducts, reset } from '../features/products/productSlice'
import Popup from 'reactjs-popup';
import { deleteProduct, updateProduct } from '../features/products/productSlice'


function ProductTable() {

    const dispatch = useDispatch()
  
    const { products } = useSelector(
      (state) => state.products
    )
  
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Produit</b></TableCell>
            <TableCell align="right"><b>Catégorie</b></TableCell>
            <TableCell align="right"><b>Prix</b></TableCell>
            <TableCell align="right"><b>Durée(s)</b></TableCell>
            <TableCell align="right"><b>Action</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              product={product}
              className='table-group'
            >
              <TableCell component="th" scope="product">
                {/* <input type="text" value={name}
                onChange={(e) => name = e.target.value}/> */}
                <input type="text" value={product.name} onChange={() => ""}/>
              </TableCell>
              <TableCell align="right"><input type="text" value={product.type} onChange={() => ""}/></TableCell>
              <TableCell align="right"><input type="text" value={product.price} onChange={() => ""}/></TableCell>
              <TableCell align="right"><input type="text" value={product.quantity} onChange={() => ""}/></TableCell>
              <TableCell align="right">
                <div className='table-btn'>
                  <button  onClick={() => 
                    dispatch(deleteProduct(product._id))}>
                    <DeleteIcon></DeleteIcon>
                  </button>
                  <button onClick={() => 
                    dispatch(updateProduct())}>
                    <EditIcon></EditIcon>
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>                  
  );
}

export default ProductTable