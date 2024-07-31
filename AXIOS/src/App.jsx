import React from 'react'
import axios from 'axios'


function App() {
  return (
    <div>
      {
        users.map(({avatar_url,id)})=>{
          return <img src={avatar_url} alt="" key={id} />
        })
      }
    </div>
  )
}

export default App
