import {  Dialog } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import styles from "./UploadImage.module.css"
import {v4 as uuid} from "uuid"
import { UserDataContext } from '../../Context/UserDataContext';

export const UploadPart4 = (props) => {
    const [img,setImg] = useState("https://i.ibb.co/QFhdByz/Instagram-logo-2016-svg.png")
    const [data,setData] = useState("")
    const [loggedFetch,setLoggedFetch] = useState({})
    const [loggedPost,setLoggedPost] = useState([])

    const {userId, userName , userImg  } = useContext(UserDataContext)

    const [user,setUser] = useState([])
    const { onClose, selectedValue, open } = props;
    const handleClose3 = () => {
        onClose(selectedValue);
      };  

      const handleAdd = (e)=>{
        e.preventDefault()
          const payload ={
              id:uuid(),
              img,
              likes: 0,
              comments: []
          }

          fetch(`https://json-server-skb-assignment.herokuapp.com/userDetails/${userId}`)
          .then((r)=>r.json())
          .then((r)=>{
              setLoggedFetch(r)
              setLoggedPost(r.post)
          }).catch(er=>{
            console.log(er)
          })
          console.log(loggedFetch);
          console.log(loggedPost);
          fetch(`https://json-server-skb-assignment.herokuapp.com/userDetails/`,{
            method:"POST",
            headers: {
                  "Content-Type": "application/json"
                },
            body: JSON.stringify({...loggedFetch,post:[...loggedPost,payload]})    
          })
          // const config = {
          //   method: "PATCH",
          //   headers: {
          //     "Content-Type": "application/json"
          //   },
          //   body: JSON.stringify({...loggedFetch,post:[...loggedPost,payload]})
          // };
          // await fetch(
          //   `https://json-server-skb-assignment.herokuapp.com/userDetails?id=${userId}`,
          //   config
          // );
          handleClose3()
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
            <button onClick={handleAdd}>Share</button>
            </div>
            <hr />


            <div className={styles.container_p4} >
                <div>
                <img className={styles.imageView_p4} src="https://i.ibb.co/QFhdByz/Instagram-logo-2016-svg.png" alt="img" />
                </div>
                <div>
                  <div className={styles.filters} >
                    <div>
                    <div className={styles.profile}  >
                                        <img className={styles.profile_img} src={userImg} alt="" />
                                        <h5 style={{marginTop:"5px"}} >{userName}</h5 >
                                    </div>
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
