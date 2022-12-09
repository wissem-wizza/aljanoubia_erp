import ComboBox from "react-responsive-combo-box";
import "react-responsive-combo-box/dist/index.css";
import { useSelector } from 'react-redux'

const Combo = () => {
  const { products } = useSelector(
    (state) => {
      console.log("whasup", JSON.stringify(state))
      return state.products
    }
  )
  console.log(products)
  const data = products.map((product)=>product.name)
  console.log(data)
  return (   <ComboBox options={data} enableAutocomplete />)
}

export default Combo
