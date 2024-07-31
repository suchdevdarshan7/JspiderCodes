import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
    const count = useSelector((state) => state.counter.value)
    const style={
        textAlign:"center",
    }
  return (
    <nav>
        <h1 style={style}>Count is {count}</h1>
    </nav>
  )
}

export default Navbar
