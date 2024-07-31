import React, { useEffect, useState} from 'react'
import './style.css'
import TableHead from './Components/TableHead'
import { products } from './products'
function App() {

  const [data, setData] = useState(products)
  const [index,setIndex] = useState(5)
  // async function fetchApi(){
  //   let response = await fetch("https://fakestoreapi.com/products")
  //   let apiData = await response.json()

  //   setData(data=> apiData)
  //   console.log(apiData)

  // }
  // useEffect(()=>{
  //   fetchApi();
  //   setIndex(index => index + 5)
  // },[])


  

  return (
    <div className="container">
      <table border={"1"}>
       <TableHead/>
      
       {
         products.map(({id,title,desc},idx)=>(
          idx<index &&
           <tr>
              <td>{`${id}`}</td>
              <td>{title}</td>
              <td>{desc}</td>
            </tr>
         ))
        }
        </table>
        <button onClick={()=>setIndex(index=>index + 5)}>Increase</button>
        <button onClick={()=>setIndex(index=> index -5)}>Decrease</button>
    </div>
  )
}

export default App


  //  idx<index  ? (<table border={"1"}>
  // < tr >
  //             <th>Id</th>
  //             <th>Product Name</th>
  //             <th>Description</th>
  //           </ >
  // <tr>
  //   <td>{id}</td>
  //   <td>{title}</td>
  //   <td>{description}</td>
  // </tr>
  //         </table >