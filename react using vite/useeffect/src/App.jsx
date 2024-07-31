import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar.jsx"
function App() {

  const [count, setCount] = useState(0);
  
  const btnref = useRef(null);
  let a = useRef(0);
  
  console.log(btnref)
  function handleClick(){
    a.current = a.current + 1; 
     btnref.current.innerText = `count is ${a.current}`; 
  }
  
  
  return (
    <>
    <Navbar color="blue"/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnref} onClick={handleClick}>
          count is {a.current }
          {console.log(a.current)}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p ref={btnref}className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
export default App;

// useEffect(()=>{
  //   a.current = a.current + 1; 
  //   console.log(`The element is rerendered ${a.current}`)    
  

  // useEffect(()=>{
  //   btnref.current.style.backgroundColor = "red";
  // },[count])
// })