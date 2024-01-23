"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
const Login = () => {
    const session = useSession()
    console.log(session)
    if(session.status==="loading"){
        return(<p>Loading......</p>)
    }
    if(session.status==="authenticated"){
        return(<button onClick={()=>signOut("google")}>signOut</button>)
    }
    // if(session.status==="unauthenticated"){
    //     return(<p>user unauthenticated</p>)
    // }
  return (
    <div>
        <button onClick={()=>signIn("google")}> logIn with Google</button>
    </div>
  )
}

export default Login