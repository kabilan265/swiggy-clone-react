import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"
const MenuItem = (props)=>{
    const {resData} = {...props}
    const {name,price,description} = resData.card.info
    const dispatch = useDispatch()
    const handleAddItem = ()=>{
      dispatch(addItem('pizza'))
    }
  return (
    <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <h4>{price}</h4>
        <span onClick={handleAddItem}>Add</span>
    </div>
  )
}
export default MenuItem;