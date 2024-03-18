import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState<number>(0)

  const incrementcount = () => {
    const newcount= count + 3
    setCount(newcount)
  }


  return (
    <>
      <h1>the count is {count}</h1>
      <button onClick= {() => setCount(prevc => prevc+1)}>+</button>
    </>

      )
}