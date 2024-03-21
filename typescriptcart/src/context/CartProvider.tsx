type CartItemType = {
  sku: string,
  name: string,
  price: number,
  qty: number
}

type CartStateType = {
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

const reducer = (state: CartStateType, action: ReducerAction):CartStateType => {
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
    }
      
    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payLoad) {
        throw new Error('action.payload missing in QUANTITY action')
      }
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