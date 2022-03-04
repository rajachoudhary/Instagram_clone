import React, { useContext, useEffect, useState } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { UserDataContext } from '../../Context/UserDataContext'
import { login_user } from '../../Redux/Auth/auth.actions'
import Styles from "./loginSignUp.module.css"

function Login() {

    const  { updateLoggedUser } = useContext(UserDataContext)

    const [loginBtnActive, setBtnActive] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [loginId, setLoginId] = useState("")
    const [loginPass, setLoginPass] = useState("")
    const [totalData, setTotalData] = useState({})
    const [wrongUser, setWrongUser] = useState(false)

    const  isAuth  = useSelector((state) => state.auth.isUserLoggedIn)
    const dispatch = useDispatch();



    useEffect(() => {
        fetch("https://json-server-skb-assignment.herokuapp.com/userDetails")
        .then(response => response.json())
        .then(result => setTotalData(result))
        .catch(err => console.log(err))

        return () => {
            setTotalData({})
        }
        
    }, [])


    const handleLogin = () => {
        for(let i = 0; i<totalData.length; i++){
            if(loginId === totalData[i].username || loginId === totalData[i].email){
                if(loginPass === totalData[i].passowrd){
                    updateLoggedUser(totalData,i)
                    dispatch(login_user())
                }
                else{
                    setWrongUser(true)
                }
            }
            else{
                setWrongUser(true)
            }
        }
    }

    const showPasswordHandle = () => {
        setShowPassword(!showPassword)
    }

  return isAuth ? <Navigate to={"/home"}/> : (

      <div className={Styles.loginMainDivSep}>

            <div className={Styles.loginPageSep}>
                <div className={Styles.loginSepBox}>
                    <img src="https://i.ibb.co/gms294Q/Screenshot-638-removebg-preview.png" height={"85px"} alt="logo" />
                    <div>{
                         
                         loginPass.length >= 1 ? <button className={Styles.showHide} onClick={showPasswordHandle} >{showPassword ? "Hide" : "Show"}</button> 
                         : <button className={Styles.showHide}></button> 

                         }
                    </div>
                    <div className={Styles.c_loginInputSepdiv}>
                       <input type="text" placeholder='Phone number, username, or email' onChange={e => setLoginId(e.currentTarget.value)} />
                       <input type={showPassword ? "text" : "password"} placeholder='Password' onChange={e => {
                           if(loginId.length >= 1){
                               if(loginPass.length >= 1){
                                setBtnActive(true)
                               }
                           }
                           if(loginPass.length === 1){
                            setBtnActive(false)
                           }
                           setLoginPass(e.currentTarget.value)
                           if(loginPass.length === 0){
                            setShowPassword(false)
                           }
                       }}/>            
                      <button onClick={handleLogin} className={loginBtnActive ? Styles.btnActive : Styles.btnUnActive}>Log In</button>
                    </div>

                    <div className={Styles.c_loginSepHr}>
                        <hr />
                        <p>OR</p>
                        <hr />
                    </div>
                       
                    <button className={Styles.c_facebookLoginSep}>  <img src="https://i.ibb.co/MMRY5zk/icons8-facebook-30.png" height={"22px"} alt="facebook" /> <p> Log in with Facebook</p></button>

                    <div className={Styles.wrongDetailsInfo}>{wrongUser && <p>Sorry, your credentials was incorrect. Please double-check your credentials.</p>}</div>

                    <div className={Styles.forgetLinkDiv} >
                       <Link className={Styles.forgetLink} to={"/account/password/reset"}>Forgot password?</Link>
                    </div>

                </div>

                <div className={Styles.loginSignUpSep}>
                    <p>Don't have an account? <Link className={Styles.signupbtn} to={"/accounts/signup"}>Sign up</Link></p>
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
        </div>

        
  )
}

export default Login