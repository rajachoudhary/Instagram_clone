import React from 'react'
import ForgetPass from '../Components/UserLogin/ForgetPass'
import HomeSignUp from "../Components/UserLogin/HomeSignUp"
import SignUp from "../Components/UserLogin/SignUp"
import Login from "../Components/UserLogin/Login"
import { Route, Routes} from "react-router-dom"
import { Home } from '../Components/Pages/Home'
import { User } from '../Components/User'
import { UserDetails } from '../Components/UserDetails'
import UserProfile from '../Components/Pages/UserProfile'
import VerticalTabs from "../Components/Pages/SettingPage"
import PageNotFound from "../Components/Pages/PageNotFound"
import { Explore } from '../Components/Pages/Explore'
import Chatpage from "../Components/ChatBox/ChatPage"



function RouteItem() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomeSignUp/>}/>
        <Route path="/account/password/reset" element={<ForgetPass/>} />
        <Route path='/accounts/signup/' element={<SignUp/>} />
        <Route path='/accounts/login' element={<Login/>}/>
        <Route path="/accounts/edit" element={<VerticalTabs/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>} />
        <Route path=':id/' element={<UserDetails/>}>
        </Route>
        <Route path='users/*' element={<User/>} >    
        </Route>
        <Route path="profile" element={<UserProfile/>} />
        <Route path="inbox" element={<Chatpage/>} />
        <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </>
  )
}

export default RouteItem