import { ReactElement } from "react"
import { ProductType } from "../context/ProductsProvider"
import {  ReducerAction, ReducerActionType } from "../context/CartProvider"

type PropsType = {
  product: ProductType,
  dispatch: React.Dispatch<ReducerAction>
  REDUCER_ACTIONS: ReducerActionType
  incart: boolean
}

const Product = ({product, dispatch, REDUCER_ACTIONS, incart}: PropsType): ReactElement => {
  
  const img: string = new URL(`../images/${product.sku}.png`, import.meta.url).href
  // console.log(img);
  
  const onAddTOCart = () => dispatch( { type: REDUCER_ACTIONS.ADD, payLoad: {...product, qty: 1} } )
  
  const itemInCart = incart ? ' -> Item in cart: ✅' : null

  const content =
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt="{product.name}" className="product__img" />
      <p>{new Intl.NumberFormat('en-Us', {style:'currency', currency: 'USD'}).format(product.price)} {itemInCart}</p>
      <button onClick={onAddTOCart}>Add To Cart</button>
    </article>
  
  return content
}

export default Product