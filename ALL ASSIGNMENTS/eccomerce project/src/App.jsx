import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Products from './Routes/Products'
import Navbar from './Component/Navbar'
import Cart from './Component/Cart'
import ViewProduct from './Component/ViewProduct'


function App() {

    const router = createBrowserRouter([
        {
            path:"/",
            element:<Navbar/>
        }
        ,{
            path:"/products",
            element: <><Navbar/><Products/></>,
        },
        ,{
            path:"/cart",
            element: <><Navbar/><Cart/></>,
        },
        ,{
            path:"/viewproduct",
            element: <><Navbar/><ViewProduct /></>,
        },
    ])
  return (
      <RouterProvider router={router}>
          <Navbar/>
    </RouterProvider>
  )
}

export default App
