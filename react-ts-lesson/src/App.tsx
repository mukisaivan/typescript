import { useCallback, useEffect, useState,  MouseEvent, KeyboardEvent, useMemo, useRef, ReactNode, Children } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import List from "./components/List";
import Section from "./components/Section";
import UseReducerCounter from "./components/UseReducerCounter";

function App() {
  function somefunction(item: string) {
    return <span className="gold">{item}</span>;
  }

  interface User {
    id: number;
    username: string;
  }

  // const [users, setUsers] = useState<User[] | null>(null);

  const [stop, setStop] = useState(false);
  const [count, setCount] = useState(0)
  const [callbackcount, setcallbackCount] = useState(0);


  // useEffect(() => {
  //   console.log('Users:', users);
    
  // },[users])

  useEffect(() => {
    const timer = setInterval(() => {
      if (!stop) {
        setCount((prevcount) => prevcount + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [stop]); //this dependency means that usethatt this useEffect will run only when stop changes therefore it runs the first second then checks if the stop has changed then runs another second


  const addtwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) :void => setcallbackCount(prev => prev+2), [])


// +++++++++++++++++++++++++++++   use memo ++++++++++++++++++++++++++++++

  type expensivefunction = (number: number) => number
  
  const theexpnesivefunction: expensivefunction = (n: number) => {
    if (n < 2) return n
    return (n-2) + (n+2)
  }

  const result = useMemo(()=> theexpnesivefunction(3), [])  //this works on large functions in order to store the result in memory and no waste too much time to recall the function every time 


  // ++++++++++++++++++++++++++++++++++   useRef hook +++++++++++++

  const inputRef = useRef<HTMLInputElement>(null)
  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);


  function useReducerFunction(n: number) {
    return n
  }



  return (
    <>
      
      <Heading title={"Application"} />
      <Section>this is my child section</Section>
      <Counter />
      <List
        items={["🍵 coffee", "🌮 tacos"]}
        render={(item) => somefunction(item)}
      />
      {/* using  use effect below */}
      <br></br>
      <br></br>
      <button onClick={addtwo}> use callback count</button>
      <p>{callbackcount}</p>
      <br></br>
      <br></br>
      <button onClick={() => setStop(true)}>stop timer use effect counter</button>
      {/* using callback below  */}
      <p>timer use effect</p>
      <h1>{count}</h1>
      <br></br>
      <br></br>
      {/* using  usememo below */}
      <p>{`usememo result: ${result}`}</p>
      <br></br>
      <br></br>
      <p>Input ref</p>
      <input type="text" ref={inputRef} />
      <br></br>
      <br></br>
      <p>UseReducer Hook</p>
      <UseReducerCounter></UseReducerCounter>
      
    </>
  );
}

export default App;