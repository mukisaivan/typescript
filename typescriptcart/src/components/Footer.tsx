
import useCart from "../hooks/useCart"

const Footer = ({ viewCart }: { viewCart: boolean }) => {
  
  const { totalItems, totalPrice } = useCart()
  
  const year: number = new Date().getFullYear()
  
  

  

  const pageContent = viewCart ? <p>Shopping cart &copy;{year}</p> : 
    (
      <>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
        <p>Shopping cart &copy;{year}</p>
      </>
    )

  const content = (
    <footer className="footer">
      {pageContent}
    </footer>
  )

  return content
}

export default Footer