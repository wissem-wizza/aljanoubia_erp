import ComboBox from "react-responsive-combo-box";
import "react-responsive-combo-box/dist/index.css";
import { useSelector } from 'react-redux'

const Combo = () => {
  const { products } = useSelector(
    (state) => {
      return state.products
    }
  )
  const data = products.map((product)=>product.name)
  return (   <ComboBox options={data} enableAutocomplete />)
}

export default Combo
