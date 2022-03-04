import React, { useEffect, useState } from 'react'
import Navbar from "../Navbar"

export const Explore = () => {
    const [data,setData] = useState([])
    const getData = ()=>{
        fetch("https://json-server-skb-assignment.herokuapp.com/userDetails")
        .then((r)=>r.json())
        .then((r)=>setData(r))
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div style={{marginTop:"32px"}}>
        <Navbar/>
        <div>
            {
                data.map((item)=>{
                    return(
                        <div key={item.id}>
                        {item.post.map((ite)=>{
                            return(
                                <div>
                                    <img src={ite.img} alt="" />
                                </div>
                            )
                        })}
                    </div>
                    )
                })
            }
        </div>
    </div>
  )
}
