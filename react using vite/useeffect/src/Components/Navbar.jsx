import  { useEffect } from 'react'

function Navbar(props) {


    // Case 1: i will run on every render: 
    // useEffect(()=>{
    //     alert("HI i will run on every render");
    // })

    //Case 2: Run only of first render

    // useEffect(()=>{
    //     alert("Hi i will run on first render")
    // },[])

    // Case 3: Run when color is changed

    //   useEffect(() => {
    //     alert("Color was changed");
    //   }, [props.color]);

      // Example of Cleanup function

    //   useEffect(()=>{
    //     alert("Hey welcome to my page This is the first render")
    //     return()=>{
    //         alert("Component was unmounted")
    //     }
    // },[])

  return (
    <div>
      <nav>
        <p>HI i am navbar{props.color}</p>
      </nav>
    </div>
  )
}

export default Navbar
