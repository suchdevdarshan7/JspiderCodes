import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addQty, removeQty, deleteProduct } from '../store/cartSlice';

function Products() {

    let { products } = useSelector((store) => store.cart);
    let dispatch = useDispatch();

    function handleClickAdd() {
        dispatch(addQty(product.id))
    }

    return (
        <div className='flex justify-around mt-6 flex-wrap'>
            {
                products.map(product => {
                    return (
                        <div key={product.id} className='flex shadow-lg flex-col p-5 rounded-lg items-center w-80 gap-5' >
                            <h1 className='text-red-700  font-medium text-xl '>{product.pname}</h1>
                            <div>
                                <img src={product.imgUrl} alt="" className='rounded-xl' />
                            </div>
                            <div>
                                <p className='text-red-800 text-xl italic'>${product.price}</p>
                            </div>
                            <p className='text-emerald-400 italic '>Quantity: {product.qty}</p>
                            <div className='flex gap-5'>
                                <button className='text-white bg-sky-300 p-2 rounded-md' onClick={() => dispatch(addQty(product.id))}>Increase</button>
                                <button className="text-white bg-gray-500 p-2 rounded-md" onClick={() => {

                                    dispatch(removeQty(product.id))
                                    if (product.qty === 1) {
                                        dispatch(deleteProduct(product.id))
                                    }
                                }}>Decrease</button>
                            </div>
                            <div className="flex gap-4">
                                <button className='bg-blue-500 text-white p-2 rounded-full'>Buy Now</button>
                                <button className="bg-slate-300 text-red-400 p-2 rounded-full" onClick={() => dispatch(deleteProduct(product.id))}>Remove From Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;
