import Home from '@mui/icons-material/Home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Land } from '../Components/Land'
import { User } from '../Components/User'
import { UserDetails } from '../Components/UserDetails'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route index path='/' element={<Land/>} />
        <Route path=':id' element={<UserDetails/>} />
        <Route path='users/*' element={<User/>} > 
           
        </Route>   
    </Routes>
  )
}
