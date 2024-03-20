
import { ChangeEvent, useReducer } from "react"

// type childrenType = {
//   children: (num: number) => ReactNode
// }


const initState = { count: 0 , text: ''}

const enum reduceraction  {
  increment,
  decrement,
  textinput,
}

type reducertype = {
  type: reduceraction,
  payload?: string
}


const reducer = (state: typeof initState, action: reducertype): typeof initState => {
  switch (action.type) {
    case reduceraction.increment:
      return {...state, count: state.count + 1 }
    case reduceraction.decrement:
      return {...state, count: state.count - 1}
    case reduceraction.textinput:
      return {...state, text: action.payload ?? '' }
    default:
      throw new Error()
  }
}


const UseReducerCounter = () => {

  const [state, dispatch] = useReducer(reducer, initState)
  function increment() {
    dispatch({type: reduceraction.increment, })
  }
  function decrement() {
    dispatch({type: reduceraction.decrement})
  }
  function handletextInput(e: ChangeEvent<HTMLInputElement>) {
    dispatch({type: reduceraction.textinput, payload: e.target.value})
  }

  return (
    <>
      <h1 >{state.count}</h1>
      <button style={{ margin: 20 }} onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <div>
        <input type="text" onChange={handletextInput} />
        <p>{state.text}</p>
      </div>
    </>
  )
}

export default UseReducerCounter