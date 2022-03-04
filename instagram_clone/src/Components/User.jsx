import React, { useEffect, useState } from 'react'
import { Outlet, Routes,Route, useParams } from 'react-router-dom'
import { UserDetails } from './UserDetails'

export const User = () => {
    // const [userData,setUserData] = useState([])
    // const pharms = useParams()
    // // console.log(pharms);
    // useEffect(()=>{
    //     if (pharms.id) {
    //         fetch(
    //           `https://json-server-skb-assignment.herokuapp.com/userDetails?name=${pharms.id}`
    //         )
    //           .then((r) => r.json())
    //           .then((data) => setUserData(data));
    //       }
    // },[pharms])
  return (
    <div>
        <Routes>
            <Route path="/"  />
            <Route path=":id" element={<UserDetails/>} />
        </Routes>
        <Outlet/>
    </div>
  )
}
