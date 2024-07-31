import React, { useState } from 'react'
import Login from './Components/Login';

const App = () => {
  const [login,isLogin] = useState(false);
  
  return (
    <div>
      {isLogin ? <> <Home/> </> : <> <Login/> </>}
    </div>
  )
}

export default App
