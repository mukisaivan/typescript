import { ReactElement } from "react"
import useCart from "../hooks/useCart"
import useProductList from "../hooks/useProducts"
import Product from "./Product"


const ProductList = () => {

  const {dispatch , REDUCER_ACTIONS, cart} = useCart()
  const {products} = useProductList()

  let pageContent: ReactElement | ReactElement[] = <p>Loading....</p>

  if (products?.length) {
    pageContent = products.map(product => {
      const incart = cart.some(item => item.sku === product.sku)

    return (
      <Product
        key={product.sku}
        product={product}
        dispatch={dispatch}
        REDUCER_ACTIONS={REDUCER_ACTIONS}
        incart={incart}
      />
    )
    })   
  }

  const content = <main className="main--products">
    {pageContent}
  </main>

  return content
}

export default ProductList