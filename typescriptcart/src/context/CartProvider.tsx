import { ReactElement, createContext, useMemo, useReducer } from "react"

type CartItemType = {
  sku: string,
  name: string,
  price: number,
  qty: number
}


export type CartStateType = {
  cart: CartItemType[]
}

const initCartState: CartStateType = { cart: [] }


const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
  type: string
  payLoad?: CartItemType
}

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
  
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payLoad) {
        throw new Error('action.payload missing in ADD action')
      }
      const { sku, name, price } = action.payLoad
      
      const filteredCart : CartItemType[] = state.cart.filter(item => item.sku !== sku)

      const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku)

      const qty: number = itemExists ? itemExists.qty + 1 : 1 

      return {... state, cart: [...filteredCart,  {sku,name, price, qty}]}
    }
          
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payLoad) {
        throw new Error('action.payload missing in REMOVE action')
      }
      const { sku } = action.payLoad

      const resultCart:CartItemType[] = state.cart.filter(item => item.sku !== sku)

      return {...state, cart: [...resultCart] }
    }
      
    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payLoad) {
        throw new Error('action.payload missing in QUANTITY action')
      }
      const { sku, qty } = action.payLoad
      const itemExists = state.cart.find(item => item.sku === sku);
      
      if (!itemExists) throw new Error("Item should be in cart to be edited");
 
      const updatedItem = {...itemExists, qty}
      
      const filteredItems = state.cart.filter(item => item.sku !== sku)
     
      return { ...state, cart: [...filteredItems, updatedItem] }
    }
    
    case REDUCER_ACTION_TYPE.SUBMIT: {
      if (!action.payLoad) {
        throw new Error('action.payload missing in SUBMIT action')
      }
      return {...state, cart: []}
    }
  
    default:
      throw new Error('Unidentified reducer action type')

  }

}

export const useCartContex = (initState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initState)

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE
  }, [])

  const totalItems = state.cart.reduce((prevValue, cartItem) => {
    return  prevValue + cartItem.qty
  }, 0)

  const totalPrice =
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
      state.cart.reduce((prevValue, cartItem) => {
        return prevValue + (cartItem.qty * cartItem.price)
      }, 0)
    )
  
  const cart = state.cart.sort((a,b) => {
    const itemA = Number(a.sku.slice(-4))
    const itemB = Number(b.sku.slice(-4))
    return itemA - itemB
  })

  return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart }  
}

export type UseCartContextType = ReturnType<typeof useCartContex>
  
const initialCartContext: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: '',
  cart: [],
}

export const CartContext = createContext<UseCartContextType>(initialCartContext)

type ChildrenType = {
  children: ReactElement | ReactElement[]
}

export const CartProvider = ({children} : ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContex(initCartState)}>
      {children}
    </CartContext.Provider>
  )
}