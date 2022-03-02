import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Navbar from './Navbar'
import styles from "./userDetails.module.css"
import { style } from '@mui/system';
export const UserDetails = () => {
    const [userData,setUserData] = useState([])
    const pharms = useParams()
    // console.log(pharms);
    useEffect(()=>{
        if (pharms.id) {
            fetch(
              `https://json-server-skb-assignment.herokuapp.com/userDetails?name=${pharms.id}`
            )
              .then((r) => r.json())
              .then((data) => setUserData(data));
          }
    },[pharms])
  return (
    <div>
        <Navbar/>
        <div className={styles.container}>
        {
            userData.map((item)=>{
                return(
                    <div key={item.id} >
                        <div className={styles.contain_data}>
                        <div>
                            <img src={item.profile_url} alt="" />
                        </div>
                        <div>
                            <div className={styles.user_name} >
                                <h1>{item.username}</h1>
                                <button>Message</button>
                                <button><PersonIcon/></button>
                                <button><KeyboardArrowDownIcon/></button>
                                <button><MoreHorizIcon/></button>
                            </div>
                            <div className={styles.followersData} >
                                <div>
                                    <h5>{item.no_of__post} </h5><h5>posts</h5>
                                </div>
                                <div>
                                    <h5>{item.no_of_followers} </h5><h5>Follower</h5>
                                </div>
                                <div>
                                    <h5>{item.no_of_follwing} </h5><h5>Following</h5>
                                </div>                       
                            </div>
                            <div className={styles.name} >
                                <h4>{item.name}</h4>
                            </div>
                        </div>   
                        </div>
                        <div className={styles.post_review} >
                            <div className={styles.postImage}>
                               {
                                 item.post.map((pd)=>{
                                     return(
                                         <div key={pd.id} >
                                            <div>
                                             <img className={styles.round_image} src={pd.img} alt="" />
                                         </div>
                                         </div>
                                     )
                                 })  
                               }
                            </div>
                        </div>
                    </div>
                )
                
            })
        }
        </div>
    </div>
  )
}
