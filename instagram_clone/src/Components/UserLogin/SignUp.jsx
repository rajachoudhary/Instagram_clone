import React, { useState } from 'react'
import {Link, Navigate, useNavigate} from "react-router-dom"
import Styles from "./loginSignUp.module.css"
import { useSelector } from 'react-redux'
import { v4 } from "uuid"
import Loading from './Loading'


const initUserDetails = {
    id : v4(),
    name : "",
    username : "",
    details : "New account created",
    phone : "",
    email : "",
    passowrd : "",
    profile_url : "https://i.ibb.co/k1tnr3P/images-removebg-preview.png",
    no_of__post : "0",
    no_of_followers : "0",
    Add_post : [],
    no_of_follwing : "0",
    comments : [],
    post: [
        {
          id: 1206,
          img: "https://i.ibb.co/k1tnr3P/images-removebg-preview.png",
          likes: 0,
          comments: []
        }
      ]
}

function SignUp() {

  const  isAuth  = useSelector((state) => state.auth.isUserLoggedIn)

  const [userData, setUserData] = useState(initUserDetails);
  const [signUpActive, setSignUpActive] = useState(false);
  const [showHidePass, setShowHidePass] = useState(false);
  const [isLoading, setLoading] = useState(false)

  const navigate = useNavigate();

  const handleData = e => {
      const {name , value} = e.currentTarget;
      setUserData({...userData, [name] : value});

      if(userData.passowrd.length === 0){
          setShowHidePass(false)
      }

      if(userData.email.length >= 2 && userData.username.length >= 2 && userData.passowrd.length >= 2 && userData.name.length >= 2){
          setSignUpActive(true)
      }
      else{
          setSignUpActive(false)
      }
  }



  const postData = async () => {
    setLoading(true)
      try {
          await fetch("https://json-server-skb-assignment.herokuapp.com/userDetails", {
              method : "POST",
              body : JSON.stringify(userData),
              headers : { "content-type" : "application/json" }
          })
          setLoading(false)
      }
      catch (err) {
          console.log(err)
          setLoading(false)
      }

      navigate("/accounts/login")
  }

  return isAuth ? <Navigate to={"/home"}/> : (
    <>
    

      <div className={Styles.mainSignupDiv}>
             <div className={Styles.signupDivPage}>
                    <img src="https://i.ibb.co/gms294Q/Screenshot-638-removebg-preview.png" height={"85px"} alt="logo" />
                    <div >
                        <h4>Sign up to see photos and videos from your friends.</h4>
                    </div>
                    <button className={Styles.facebookWithSignup}><img src="https://i.ibb.co/yN4SsGs/icons8-facebook-30-1.png" alt="fblogo" /> Log in With Facebook</button>
                    <div className={Styles.c_orHrtagSignUp}>
                        <hr />
                        <p>OR</p>
                        <hr />
                    </div>
                    
                    <div className={Styles.c_SignUpInput_div}>
                        <input type="text" name='email' value={userData.email} onChange={handleData} placeholder='Mobile Number or Email'/>
                        <input type="text" name='name' value={userData.name} onChange={handleData} placeholder='Full Name'/>
                        <input type="text" name='username' value={userData.username} onChange={handleData} placeholder='username'/>
                        <input type={showHidePass ? "text" : "password"} name='passowrd' value={userData.passowrd} onChange={handleData} placeholder='passowrd'/>
                    </div>

                    <button  className={ signUpActive ? Styles.signUpbtnActive : Styles.signUpbtnUnactive} onClick={() => {
                        signUpActive ? postData() : console.log("nothing")
                    }}>{isLoading ? <Loading /> : "Sign up" }</button>

                    <p>By signing up, you agree to our <b>Terms, Data Policy</b>  and <b> Cookies Policy .</b></p>

                    <div>
                        {userData.passowrd.length >= 1 ? <button className={Styles.signUpshowHide} onClick={() => setShowHidePass(!showHidePass) }>{showHidePass ? "Hide" : "Show"}</button> : <button className={Styles.signUpshowHide}></button>}
                    </div>

           </div>

                <div className={Styles.signInBox}>
                    <p>Have an account?  <Link className={Styles.signupbtn} to={"/accounts/login"}>Log in</Link></p>
                </div>

                <div className={Styles.downloadLink}>
                    <p>Get the app.</p>
                    <div>
                        <button onClick={() => window.location.href = "https://apps.apple.com/app/instagram/id389801252"}><img src="https://instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" height={"40px"} width={"135px"} alt="appStore" /></button>
                        <button onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.instagram.android"}><img src="https://instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" height={"40px"} width={"135px"}  alt="GooglePlay" /></button>
                    </div>
                </div>

                <div  className={Styles.footerDiv} >
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

      </>
  )
}

export default SignUp