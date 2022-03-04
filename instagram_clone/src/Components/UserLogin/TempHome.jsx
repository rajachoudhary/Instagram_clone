import React from 'react'
import { useSelector } from 'react-redux'

function TempHome() {

    const  isAuth  = useSelector((state) => state.auth.isUserLoggedIn)

  return (
    <div>
        <h1>WELCOME TO INSTAGRAM</h1>
        {isAuth ? <button>LOGOUT</button> : <button>LOGIN</button>}
    </div>
  )
}

export default TempHome