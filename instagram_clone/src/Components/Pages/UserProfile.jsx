import React, { useContext, useEffect, useState} from 'react'
import { UserDataContext } from '../../Context/UserDataContext'
import Navbar from "../Navbar"
import Styles from "../../CSS/userProfile.module.css"
import { useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'



function UserProfile() {

    const  { userName, userCaption ,profileName, userImg,userNumPosts,userFollower,userFollowing,userPosts, getDataLoggedUser } = useContext(UserDataContext)
    const  isAuth  = useSelector((state) => state.auth.isUserLoggedIn)
    const [showHide, setShowHide] = useState(false)
    
    const navigate = useNavigate()

    const [post, setPost] = useState(true)
    const [saved, setSaved] = useState(false)
    const [tagged, setTagged] = useState(false)

    const showPost = () => {
        setPost(true)
        setSaved(false)
        setTagged(false)
    }

    const showSaved = () => {
        setPost(false)
        setSaved(true)
        setTagged(false)
    }

    const showTagged = () => {
        setPost(false)
        setSaved(false)
        setTagged(true)
    }

    useEffect(() => {
     getDataLoggedUser()
    }, [])

  return isAuth ? (
    <div className={Styles.mainProfilePage} >
        <Navbar />
        <div className={Styles.level1Div}>
           <div><img className={Styles.userImage} src={userImg} height={"160px"} width={"160px"} alt="profileImg" /></div>
           <div>
               <div className={Styles.userNameDiv} >
                   <h1>{userName}</h1>
                   <button onClick={() => navigate("/accounts/edit")} >Edit Profile</button>
                   <button><img src="https://i.ibb.co/Gtf5h6c/Screenshot-643-removebg-preview.png" height={"27px"} alt="" /></button>
               </div>
               <div className={Styles.followDiv} >
                   <p><b>{userNumPosts}</b> posts</p>
                   <p><b>{userFollower}</b> follwers</p>
                   <p><b>{userFollowing}</b> following</p>
               </div>
               <p className={Styles.usernameProfile}>{profileName}</p>
               <p className={Styles.userCaption} >{userCaption}</p>
           </div>
           <div></div>
        </div>

        <hr className={Styles.hrlineforprofile} />

        <div className={Styles.profilethreebtn}>
            <button className={post ? Styles.showPostBtn : Styles.tappedPost}  onClick={showPost} > <img className={Styles.profileBtnIcongrid} src="https://i.ibb.co/wwG6MWp/icons8-grid-64-1.png" height={"13px"} width={"13px"} alt="" /> POSTS</button>
            <button className={saved ? Styles.showSavedBtn  : Styles.tappedSaved}  onClick={showSaved}  > <img className={Styles.profileBtnIcon} src="https://i.ibb.co/4M7rwDZ/icons8-bookmark-64.png" height={"17px"}  width={"17px"}  alt="" /> SAVED</button>
            <button className={tagged ? Styles.showTaggedBtn  : Styles.tappedTagged}  onClick={showTagged}  > <img  className={Styles.profileBtnIcon} src="https://i.ibb.co/XSzT1P6/icons8-user-location-64.png" height={"17px"}  width={"17px"} alt="" />  TAGGED</button>
        </div>

        <div className={Styles.MainPostResponsiveDiv} >
 
        <div className={ post ? Styles.userPosts : Styles.userPostHide } >
                 {userPosts.map((post) => {
                     return (
                     <div key={post.id} className={Styles.likeCommentUp}  onMouseEnter={() => setShowHide(true)} onMouseLeave={() => setShowHide(false)} >
                       <div className={showHide ? Styles.likeCommentDiv : Styles.likeCommentDivDis} >
                           
                          <div className={Styles.likeDiv} >
                              <img src="https://i.ibb.co/QkzwjHN/icons8-heart-30.png" height={"40px"} width={"40px"} alt="" />
                              <p>{post.likes}</p>
                          </div>

                          <div className={Styles.commentDiv} >
                             <img src="https://i.ibb.co/nCFXgnW/icons8-comment-67.png" height={"35px"} width={"35px"} alt="" />
                             <p>{post.comments.length}</p>
                          </div>
                       </div>
                         

                         < img className={Styles.imageShown} height={"280vh"} width={"365vw"} src={post.img} alt=""/>
                     </div>     
                     )
                    })}
        </div>
        
        <p className={saved ? Styles.onlyuser : Styles.onlyuserHide} >Only you can see what you're saved</p>
       <div className={saved ? Styles.savedMainContainer : Styles.savedHide}>
         <div className={Styles.savedPageProfile} >
            <div className={Styles.savedDiv} >
                {
                    userPosts.map((p) => {
                        return (
                            <div>
                                <img src={p.img} alt="" height={"160px"} width={"160px"} />
                            </div>
                        )
                    })
                }
            </div>
         </div>
        </div>  


        <div className={tagged ? Styles.userTagged : Styles.userTaggedHide} >
                 {[userPosts[0]].map((post) => {
                     return (
                     <div key={post.id} className={Styles.likeCommentUp}  onMouseEnter={() => setShowHide(true)} onMouseLeave={() => setShowHide(false)} >
                       <div className={showHide ? Styles.likeCommentDiv : Styles.likeCommentDivDis} >
                           
                          <div className={Styles.likeDiv} >
                              <img src="https://i.ibb.co/QkzwjHN/icons8-heart-30.png" height={"40px"} width={"40px"} alt="" />
                              <p>{post.likes}</p>
                          </div>

                          <div className={Styles.commentDiv} >
                             <img src="https://i.ibb.co/nCFXgnW/icons8-comment-67.png" height={"35px"} width={"35px"} alt="" />
                             <p>{post.comments.length}</p>
                          </div>
                       </div>
                         

                         < img className={Styles.imageShown} height={"280vh"} width={"370vw"} src={post.img} alt=""/>
                     </div>     
                     )
                    })}
        </div>

        </div>

        <div className={Styles.footerProfilePage} >

        <div className={Styles.footerSignUpLink} >
                <Link className={Styles.footerPages} to={""}>Meta</Link>
                <Link className={Styles.footerPages}  to={""}>About</Link>
                <Link className={Styles.footerPages}  to={""}>Blog</Link>
                <Link className={Styles.footerPages}  to={""}>Jobs</Link>
                <Link className={Styles.footerPages}  to={""}>Help</Link>
                <Link className={Styles.footerPages}  to={""}>API</Link>
                <Link className={Styles.footerPages}  to={""}>Privacy</Link>
                <Link className={Styles.footerPages}  to={""}>Terms</Link>
                <Link className={Styles.footerPages}  to={""}>Top Accounts</Link>
                <Link className={Styles.footerPages}  to={""}>Hashtags</Link>
                <Link className={Styles.footerPages}  to={""}>Locations</Link>
                <Link className={Styles.footerPages}  to={""}>Instagram Lite</Link>
            </div>

            <div >
                <select className={Styles.languageList}>
                    <option value="">English</option>
                    <option value="">Afrikans</option>
                    <option value="">English (UK)</option>
                    <option value="">Suomi</option>
                    <option value="">Italiano</option>
                    <option value="">Norsk</option>
                    <option value="">Polski</option>
                    <option value="">Portugus</option>
                    <option value="">Hindi</option>
                    <option value="">Nederlands</option>
                </select>
                <img src="https://i.ibb.co/0YVKrqX/icons8-circled-c-50.png" height={"13px"} alt="credit" /> 2022 Instagram from Meta
            </div>

            </div>

    </div>
  ) : <Navigate to={"/"}/>
}

export default UserProfile

// https://i.ibb.co/kchzTFS/icons8-user-location-64-1.png
// https://i.ibb.co/XSzT1P6/icons8-user-location-64.png
// https://i.ibb.co/BjyK48R/icons8-bookmark-64-1.png
// https://i.ibb.co/4M7rwDZ/icons8-bookmark-64.png
// https://i.ibb.co/b1VYB5N/icons8-grid-64-2.png
// https://i.ibb.co/wwG6MWp/icons8-grid-64-1.png