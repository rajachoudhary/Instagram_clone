import Home from '@mui/icons-material/Home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Land } from '../Components/Land'
import { Posts } from '../Components/Posts'
import { User } from '../Components/User'
import { UserDetails } from '../Components/UserDetails'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route index path='/' element={<Land/>} />
        <Route path=':id/' element={<UserDetails/>}>
        </Route>
        <Route path='users/*' element={<User/>} >    
        </Route>  
        {/* <Route path= />  */}
    </Routes>
  )
}
