import { Button, Dialog, Fab } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styles from "./UploadImage.module.css"
import {v4 as uuid} from "uuid"

export const UploadPart4 = (props) => {
    const [img,setImg] = useState("https://i.ibb.co/QFhdByz/Instagram-logo-2016-svg.png")
    const [data,setData] = useState("")

    const [user,setUser] = useState([])
    const { onClose, selectedValue, open } = props;
    const handleClose3 = () => {
        onClose(selectedValue);
      };  

      const handleAdd = async(id)=>{
          const payload ={
              id:uuid(),
              img,
              data
          }
          const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          };
          await fetch(
            `https://json-server-skb-assignment.herokuapp.com/userDetails?`,
            config
          );
      }

      useEffect(()=>{
          fetch("https://json-server-skb-assignment.herokuapp.com/userDetails?name=masaischool")
          .then((r)=>r.json())
          .then((r)=>setUser(r))
      },[])

  return (
    <div>
      <Dialog className={styles.diag} onClose={handleClose3} open={open}>    
        <div>
            <div className={styles.funct_nav} >
            <button  >3perv</button>
            {
                user.map((itm)=>{
                    return <button onClick={()=>handleAdd(itm.id)} >Share</button>
                })
            }
            </div>
            <hr />


            <div className={styles.container_p3} >
                <div>
                <img className={styles.imageView_p3} src="https://i.ibb.co/QFhdByz/Instagram-logo-2016-svg.png" alt="img" />
                </div>
                <div>
                  <div className={styles.filters} >
                    <div>
                        {
                            user.map((itm)=>{
                                return(
                                    <div className={styles.profile} key={itm.id} >
                                        <img className={styles.profile_img} src={itm.profile_url} alt="" />
                                        <h3>{itm.username}</h3>
                                    </div>
                                )
                            })
                        }
                        <div>
                            <input type="text" onChange={(e)=>setData(e.currentTarget.value)} />
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        </Dialog>
    </div>
  )
}
