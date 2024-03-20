import { ChangeEvent, ReactElement, createContext, useCallback, useContext, useReducer } from "react"


type StateType =  {
  count: number,
  text: string
}

export const initState = { count: 0, text: '' }

const enum reduceraction {
  increment,
  decrement,
  textinput,
}

type reducertype = {
  type: reduceraction,
  payload?: string
}


const reducer = (state: StateType, action: reducertype): typeof initState => {
  switch (action.type) {
    case reduceraction.increment:
      return { ...state, count: state.count + 1 }
    case reduceraction.decrement:
      return { ...state, count: state.count - 1 }
    case reduceraction.textinput:
      return { ...state, text: action.payload ?? '' }
    default:
      throw new Error()
  }
}


const useCounterContex = (initState: StateType) => {

  const [state, dispatch] = useReducer(reducer, initState)
  const increment = useCallback(() => {
    dispatch({ type: reduceraction.increment, })
  }, [])
  
  function decrement() {
    dispatch({ type: reduceraction.decrement })
  }
  function handletextInput(e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: reduceraction.textinput, payload: e.target.value })
  }

  return { state, increment, decrement , handletextInput }
}

type UseCounterContextType = ReturnType<typeof useCounterContex>

const initContextState: UseCounterContextType = {
  state: initState,
  increment: () =>  {},
  decrement: () => { },
  handletextInput: (_e: ChangeEvent<HTMLInputElement>) => {},
}

export const CounterContext = createContext<UseCounterContextType>(initContextState)


type ChildrenType = {
  children: ReactElement | undefined
}


export const CounterProvider = ({
  children, ...initState 
}: ChildrenType & StateType) => {
  return (
    <CounterContext.Provider value={useCounterContex(initState)}>
      {children}
    </CounterContext.Provider>
  )
}




type UseCounterHookType = {
  count: number,
  increment: () => void,
  decrement: () => void,
} 

export const useCount = ():UseCounterHookType => {
  const {state:{count}, increment, decrement} = useContext(CounterContext)
  return {count, increment, decrement}
}

type UseTextHookType = {
  text: string,
  handletextInput: (e: ChangeEvent<HTMLInputElement>)=> void
}

export const useText = (): UseTextHookType => {
  const {state: {text}, handletextInput} = useContext(CounterContext)
  return { text, handletextInput }
}
