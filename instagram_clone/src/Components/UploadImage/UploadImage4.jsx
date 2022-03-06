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
            `https://json-server-skb-assignment.herokuapp.com/userDetails?username=masaischool`,
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
            <div className={styles.funct_nav4} >
              <button></button>
            <button onClick={()=>handleAdd()}>Share</button>
            </div>
            <hr />


            <div className={styles.container_p4} >
                <div>
                <img className={styles.imageView_p4} src="https://i.ibb.co/QFhdByz/Instagram-logo-2016-svg.png" alt="img" />
                </div>
                <div>
                  <div className={styles.filters} >
                    <div>
                        {
                            user.map((itm)=>{
                                return(
                                    <div className={styles.profile} key={itm.id} >
                                        <img className={styles.profile_img} src={itm.profile_url} alt="" />
                                        <h5 style={{marginTop:"5px"}} >{itm.username}</h5 >
                                    </div>
                                )
                            })
                        }
                        <div>
                            <textarea placeholder='Write a caption ...' className={styles.input_data} type="text" onChange={(e)=>setData(e.currentTarget.value)} />
                            <div className={styles.extra}>
                            <hr />
                            <p>Add Location</p>
                            <hr />
                            <p>Accessibility</p>
                            <hr />
                            <p>Advance Setting</p>
                            <hr />
                            </div>
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
