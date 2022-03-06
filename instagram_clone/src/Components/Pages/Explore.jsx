import React, { useEffect, useState } from 'react'
import Navbar from "../Navbar"
import styles from "./Explore.module.css"

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
    <div className={styles.container}>
        <Navbar/>
        <div>
            {
                data.map((item)=>{
                    return(
                        <div className={styles.container_data} key={item.id}>
                        {item.post.map((ite)=>{
                            return(
                                <div className={styles.image_div} >
                                    <img className={styles.images} src={ite.img} alt="" />
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