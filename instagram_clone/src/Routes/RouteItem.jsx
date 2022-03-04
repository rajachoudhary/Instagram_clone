import React from 'react'
import ForgetPass from '../Components/UserLogin/ForgetPass'
import HomeSignUp from "../Components/UserLogin/HomeSignUp"
import SignUp from "../Components/UserLogin/SignUp"
import Login from "../Components/UserLogin/Login"
import { Route, Routes} from "react-router-dom"
import TempHome from '../Components/UserLogin/TempHome'


function RouteItem() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomeSignUp/>}/>
        <Route path="/account/password/reset" element={<ForgetPass/>} />
        <Route path='/accounts/signup/' element={<SignUp/>} />
        <Route path='/accounts/login' element={<Login/>}/>
        <Route path='/home' element={<TempHome/>}/>
    </Routes>
    </>
  )
}

export default RouteItem