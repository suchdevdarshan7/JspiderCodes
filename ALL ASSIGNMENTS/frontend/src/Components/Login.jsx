import React, { useState } from 'react'
const Login = () => {

    const [UserData,setUserData] = useState({ name: "", email:"", password:"",confirmPassword:"" })

    async function SendDetails(){
        let reponse = await fetch("http",{method:"POST", body:UserData})
        
    }    
    


  return (
    <div>
        <form>
            <div>
                <input type="text" value={UserData.email} onChange={(e)=> setUserData({...UserData,email:e.target.value})} />
            </div>
            <div>
                <input type="text" value={UserData.name} onChange={(e)=> setUserData({...UserData,name: e.target.value})} />
            </div>

            <div>
                <input type="text" value={UserData.password} onChange={(e)=> setUserData({...UserData,password: e.target.value})} />
            </div>

            <div>
                <input type="text" value={UserData.confirmPassword} onChange={(e)=>setUserData({...UserData,confirmPassword:e.target.value})} />
            </div>

            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login
