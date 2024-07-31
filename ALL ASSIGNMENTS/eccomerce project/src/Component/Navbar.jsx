import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
function Navbar() {
    const ItemsInCart = useSelector((state) => state.CartSlice.TotalItemsInCart);
  return (
    <nav className='bg-sky-500  flex justify-around items-center sticky top-0'>
        <h1 className='text-blue-800 font-bold text-2xl'>Fake Store</h1>
        <ul className='flex justify-center gap-4 h-20 items-center'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">About Us</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
        </ul>
          <NavLink to="/cart" className="flex flex-col relative"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg><span>Cart</span> <span className='absolute -top-2 left-2 text-white text-l rounded-full bg-red-600'>{ItemsInCart}+</span></NavLink>
    </nav>
  )
}

export default Navbar
