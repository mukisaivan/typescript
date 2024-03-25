import { ChangeEvent, ReactElement, memo } from "react"
import { CartItemType, ReducerAction, ReducerActionType } from "../context/CartProvider"

type PropsType = {
  item: CartItemType
  dispatch: React.Dispatch<ReducerAction>
  REDUCER_ACTIONS: ReducerActionType
}


const CartLineItem = ({item, dispatch, REDUCER_ACTIONS}: PropsType) => {
  
  const img: string = new URL(`../images/${item.sku}.png`, import.meta.url).href

  const lineTotal = item.price * item.price

  const highestQty = 20 > item.qty ? 20 : item.qty

  const optionValues = [...Array(highestQty).keys()].map(i => i + 1)
  
  const options: ReactElement[] = optionValues.map(val => {
    return <option key={`opt${val}`} value = {val}>{val}</option>
  })

  const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payLoad: {...item, qty: Number(e.target.value)}
    })
  }
  

  const onRemoveFromCart = () => {
    return dispatch({type: REDUCER_ACTIONS.REMOVE, payLoad: item,})
  }
  

  const content = (
    <li className="cart__item">
      <img src={img} alt={item.name} className="cart__img" />
      <div aria-label="Item Label">{item.name}</div>
      <div aria-label="Price Per Item">{new Intl.NumberFormat('en-US', {style: 'currency', currency:'USD'}).format(item.price)}</div>
    
      <label htmlFor="itemQty">Item Quantity</label>
      <select
        name="itemQty"
        id="itemQty"
        className="cart__select"
        value={item.qty}
        aria-label="Item Quantity"
        onChange={onChangeQty}
      >
        {options}
      </select>
      <div className="cart_item-subtotal" aria-label="Line Item Subtotal">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lineTotal)}</div>
      <button
        onClick={onRemoveFromCart}
        className="cart__button"
        title="Remove Item From Cart"
        aria-label="Remove Item From Cart"
      >
        ❌
      </button>
    
    </li>
  )
  
  return content
}

const areItemsEqual = ({ item: prevItem }: PropsType, {item: nextItem}: PropsType) => {
  return Object.keys(prevItem).every(key => {
    return prevItem[key as keyof CartItemType]  === nextItem[key as keyof CartItemType]
  })
}

const MemoizedCartLineItem = memo<typeof CartLineItem>(CartLineItem, areItemsEqual)

// export default CartLineItem
export default MemoizedCartLineItem