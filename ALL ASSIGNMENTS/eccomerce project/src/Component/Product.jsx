import React, { Children, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../Store/CartSlicer'
import { useNavigate } from 'react-router'
import Cart from './Cart'
import { Link } from 'react-router-dom'

function Product({ id, image, title, price }) {

    const navigate = useNavigate();
    const count = useSelector((state) => state.CartSlice.TotalItemsInCart);
    const dispatch = useDispatch()

    const [productQuantity, setQuantity] = useState(0);

    function handleAddClick(e) {
        dispatch(addToCart());
        setQuantity(count => count + 1);
    }


    return (

        <div className='h-96 w-96 shadow-lg flex flex-col items-center justify-center gap-2 p-5 rounded-xl hover:cursor-pointer' >
            <img src={image} alt="" className='w-3/6/5 h-2/4' />
            <h1>{title}</h1>
            <h3>MRP: <span className='text-red-600'>${price}</span></h3>
            <div>
                Quantity: {productQuantity}
            </div>
            <div className='flex gap-4'>
                <button className='bg-yellow-300 text-white p-2 rounded-lg' onClick={handleAddClick}>Add To Cart</button>
                <Link to="/viewproduct" className='bg-blue-500 text-white p-2 rounded-lg'>View Product</Link>
            </div>

        </div>
    )
}

export default Product

// onClick={()=> navigate(`/cart:${id}`)}


// {
//     !count ? (
//         <button className='bg-blue-500 text-white p-2 rounded-lg ' onClick={handleAddClick}>Add to cart</button>
//     ) : (
//         <button className='bg-blue-500 text-white p-2 rounded-lg '>Go to cart</button>
//     )

// }
// <button className='bg-yellow-300 text-white p-2 rounded-lg'>Buy Now</button>