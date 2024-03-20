import { useCount, useText } from "./CounterContex"


const UseReducerCounterCopy = () => {

  const { count, increment, decrement } = useCount()
  const {text, handletextInput} = useText()

  return (
    <>
      <h1 >{count}</h1>
      <button style={{ margin: 20 }} onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <div>
        <input type="text" onChange={handletextInput} />
        <p>{text}</p>
      </div>
    </>
  )
}

export default UseReducerCounterCopy