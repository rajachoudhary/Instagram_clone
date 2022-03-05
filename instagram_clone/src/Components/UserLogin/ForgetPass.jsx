import React, { useState } from "react";
import Styles from "./loginSignUp.module.css";
import { Link } from "react-router-dom"
import ShowPassword from "./ShowPassword";
import { useEffect } from "react";

function ForgetPass() {

  const [buttonActive, setButtonActive] = useState(false);
  const [forgetDetails, setForgetDetails] = useState("")
  const [allDetails, setAllDetails] = useState({})
  const [password, setPassword] = useState("")
  const [wrongDetails, setWrongDetails] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetch("https://json-server-skb-assignment.herokuapp.com/userDetails")
    .then(response => response.json())
    .then(finalRes => setAllDetails(finalRes))
    .catch(err => console.log(err))

    return () => {
      setAllDetails({})
  }

  }, [])


  const forgetPass = () => {
    for(let i = 0; i<allDetails.length; i++){
      if(forgetDetails === allDetails[i].username || forgetDetails === allDetails[i].email){
          const pass = allDetails[i].passowrd
          setPassword(pass)
          setSuccess(true)
          break;
      }
      else{
        setWrongDetails(true)
      }
  }
  }

  return (
    <div>
        <nav className={Styles.forgetpNavbar}>
          <img
            height={"52px"}
            src="https://i.ibb.co/gms294Q/Screenshot-638-removebg-preview.png"
            alt=""
          />
        </nav>

        <div className={Styles.mainDivForgetPass}>
          {
            success ? ( <ShowPassword password={password} /> ) : 
          ( <div className={Styles.forgetPassdiv}>
             <img src="https://i.ibb.co/YdPfybg/Untitled-design-6.png" height={"105px"} alt="lockimg" />
             <h3>Trouble Logging In?</h3>
             <p>Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
             <input type="text" placeholder="Email, Phone, or Username" onChange={e => {
               setForgetDetails(e.currentTarget.value);
               if(forgetDetails.length >= 2){
                 setButtonActive(true)
               }
               else{
                 setButtonActive(false)
               }
             }} />
             <button className={buttonActive ? Styles.activeForgBtn : Styles.nonActiveForBtn} onClick={() => {
               if(buttonActive){
                forgetPass()
               }
             }} >Send Login Link</button>
             <div className={Styles.hrTaForgetPage}>
                        <hr />
                        <p>OR</p>
                        <hr />
              </div>
              <Link to={"/accounts/signup"} className={Styles.createAccForg}>Create New Account</Link>

              {wrongDetails && <h5 className={Styles.usernotFound} >No users found.</h5>}

              <div className={Styles.backLoginForgDiv}>
                <Link to={"/accounts/login"} className={Styles.backLoginForg}>Back To Login</Link>
              </div>
          </div> ) }


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

            <div className={Styles.lastfooterForg} >
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
                <img src="https://i.ibb.co/0YVKrqX/icons8-circled-c-50.png" height={"11px"} alt="credit" /> <p> 2022 Instagram from Meta</p>
            </div>


        </div>

        

    </div>
  );
}

export default ForgetPass;
