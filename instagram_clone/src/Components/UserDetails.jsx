import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Navbar from './Navbar'
import Styles from "./userDetails.module.css"
import Footer from "./Pages/Footer"

export const UserDetails = () => {
    const [userData,setUserData] = useState([])
    const [follow,setFollow] = useState("Follow")
    const pharms = useParams()
    const handleChangeFOllow = ()=>{
        if(follow === "Follow"){
            setFollow("Following")
        }else{
            setFollow("Follow")
        }
    }
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
    return(
        <div >
            <Navbar />
            {
                userData.map((item)=>{
                    return(
                        <>
                        <div className={Styles.mainProfilePage} >
                            <div className={Styles.level1Div}>
                               <div><img className={Styles.userImage} src={item.profile_url} height={"160px"} width={"160px"} alt="profileImg" /></div>
                               <div>
                                   <div className={Styles.userNameDiv} >
                                       <h1>{item.username}</h1>
                                       <button className={Styles.buttn} onClick={handleChangeFOllow} >{follow}</button>
                                       <button className={Styles.buttn2}><KeyboardArrowDownIcon/></button>
                                       <button className={Styles.buttn3}><MoreHorizIcon/></button>
                                   </div>
                                   <div className={Styles.followDiv} >
                                       <p><b>{item.no_of__post}</b> posts</p>
                                       <p><b>{item.no_of_followers}</b> follwers</p>
                                       <p><b>{item.no_of_follwing}</b> following</p>
                                   </div>
                                   <p className={Styles.usernameProfile}>{item.name}</p>
                                   <p className={Styles.userCaption} >{item.details}</p>
                               </div>
                            </div>
                            <hr className={Styles.hrlineforprofile} />

                            <div className={Styles.profilethreebtn}>
                                <button className={ Styles.showPostBtn}> <img className={Styles.profileBtnIcongrid} src="https://i.ibb.co/wwG6MWp/icons8-grid-64-1.png" height={"13px"} width={"13px"} alt="" /> POSTS</button>
                                <button className={ Styles.showSavedBtn }> <img className={Styles.profileBtnIcon} src="https://i.ibb.co/4M7rwDZ/icons8-bookmark-64.png" height={"17px"}  width={"17px"}  alt="" /> SAVED</button>
                                <button className={ Styles.showTaggedBtn}> <img  className={Styles.profileBtnIcon} src="https://i.ibb.co/XSzT1P6/icons8-user-location-64.png" height={"17px"}  width={"17px"} alt="" />  TAGGED</button>
                            </div>
                            <div className={Styles.userDetails_post}>
                                <div className={Styles.imageDisp}>
                                {item.post.map((posts) => {
                                        return (
                                        <div key={posts.id} >
                                            <img className={Styles.imageShown} src={posts.img} alt=""/>
                                        </div>     
                                        )
                                 })}
                                </div>
                            </div>
                        </div>
                            
                        </>
                    )
                })
            }
    
        <Footer/>
        </div>
      ) 
}
