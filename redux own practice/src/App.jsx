import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


function App() {

  const count = useSelector(()=> state.counter.count );
  console.log(count)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={()=>dispatch(add())}>+</button>
      {/* <h1>Count{counter}</h1> */}
      <button onClick={()=>dispatch(minus())}>-</button>
    </div>
  )
}

export default App
