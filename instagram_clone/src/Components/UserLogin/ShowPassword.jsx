import React from 'react'
import { Link } from "react-router-dom"
import Styles from "./loginSignUp.module.css";


function ShowPassword({ password }) {
  return (
    <div className={Styles.showDiv} >
        <h4>Success!</h4>
        <p>Your Password Is : <b>{password}</b></p>
        <p>Get back into your account.</p>
        <Link to={"/accounts/login"} >Ok</Link>
    </div>
  )
}

export default ShowPassword