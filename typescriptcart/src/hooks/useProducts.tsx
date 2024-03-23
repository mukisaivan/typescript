import { useContext } from "react"
import { ProductsContext, UseProductContextType } from "../context/ProductsProvider"



const useProductList = ():UseProductContextType => {

  const productsContext = useContext(ProductsContext)
  
  return productsContext

}
export default useProductList