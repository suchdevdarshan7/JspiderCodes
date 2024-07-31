import React, { useEffect } from 'react'
import './css/ViewProduct.css'
function ViewProduct() {
  async function fetchApi(){
    let response = await fetch('https://fakestoreapi.com/products/2')
    let data = await response.json()
    console.log(data)
  }
  useEffect(()=>{
    fetchApi();
  },[])
  return (
    <section className='flex justify-around'>
      <div>
          <div className=''>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVx6CB56pxO8gwlzLLOkV8fPN0jfF3T_98w&s" alt="imageOfTheProduct" />
          </div>
          <div className='flex gap-10 shadow-lg p-8'>
            <button className='bg-yellow-300 text-white p-4 rounded-xl'>Add to Cart</button>
            <button className='btn-animate text-white p-4 rounded-xl'>Buy Now</button>
          </div>
      </div>

      <div>
        <h2>Product title</h2>
      </div>
    </section>
  )
}

export default ViewProduct
