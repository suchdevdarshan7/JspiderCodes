import React from 'react'

function App1() {
    async function fetchApi(){
        let response = await fetch('./products.json()')
    }
  return (
    <div>
      <div className="container"></div>
    </div>
  )
}

export default App1
