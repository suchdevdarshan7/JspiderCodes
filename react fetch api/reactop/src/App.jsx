import { useState } from 'react'


export default function App(){
  let[data,setData] = useState([]);
  async function fetchApi(){
    let response = await fetch("http://api.github.com/users");
    let data = await response.json();

    console.log(data);
    setData(data);
  } 

  fetchApi()
  
  return (
    <div className="container">
        {data.map(()=>{
          return (
            <>
            <p>login :{m.login} </p>
            <img src="" alt="" />
            </>
          )
        })}
    </div>
  );
}