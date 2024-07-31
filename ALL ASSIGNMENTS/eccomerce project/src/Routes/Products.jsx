import React, { useEffect, useState } from 'react'
import Product from '../Component/Product';
import { useDispatch, useSelector } from 'react-redux';


function Products() {

  // const products = useSelector((state)=> state.CartSlice.products)
  const [products,setProducts] = useState([]);
  const dispatch = useDispatch();
  let Globalproducts = useSelector((state)=> state.CartSlice.products)

  console.log(`The global products is ${Globalproducts}`)

  console.log(Globalproducts)

  async function fetchApi(){
    let response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json();
    Globalproducts = data;
    console.log(`When we fetch the api the global products is ${Globalproducts}`)
      setProducts(count=>data)
  }


  
  useEffect(()=>{
    fetchApi()
  },[])

  
  return (
    <>
    <div>
      <marquee behavior="" direction="" className="bg-yellow-300 text-red-500">June Sale ends soon!</marquee>
    </div>
    <div className='flex flex-wrap justify-around gap-6 p-20'>
      {
        products.map((element) => (<Product key={element.id} image={element.image} title={element.title} price={element.price} /> ))
      }
    </div>
    </>
  )
}

export default Products
