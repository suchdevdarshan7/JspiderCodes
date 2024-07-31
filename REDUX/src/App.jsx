import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from './app/CounterSlice'
import Navbar from './Components/Navbar'

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar/>
    <div className="container">

      <button onClick={()=>{dispatch(increment())}}>+</button>
      <h1>count:{count}</h1>
      <button onClick={()=>{dispatch(decrement())}}>-</button>

      <button onClick={()=>{dispatch(multiply())}}>x</button>

    </div>
    </>
  )
}

export default App
